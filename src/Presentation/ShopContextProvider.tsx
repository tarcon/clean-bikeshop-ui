import React, { useState } from "react"
import { BikeStorageGateway } from "../Shop/storage/BikeStorageGateway"
import { BikesPresenter } from "../Shop/presenter/BikesPresenter"
import { Pages, ShopContext } from "./ShopContext"
import { SeeBikes } from "../Shop/use-cases/SeeBikes"
import { WelcomePresenter } from "../Shop/presenter/WelcomePresenter"
import { SeeWelcome } from "../Shop/use-cases/SeeWelcome"

export function ShopContextProvider(props: { children: React.ReactNode }) {
   let [appViewModel, setAppViewModel] = useState({
      currentPage: Pages.Welcome,
      currentPageViewModel: {},
   })

   const storage = new BikeStorageGateway()

   const bikesPresenter = new BikesPresenter(bikesViewModel => {
      const state = { ...appViewModel }
      state.currentPage = Pages.Bikes
      state.currentPageViewModel = bikesViewModel
      setAppViewModel(state)
   })

   const welcomePresenter = new WelcomePresenter(welcomeViewModel => {
      const state = { ...appViewModel }
      state.currentPage = Pages.Welcome
      state.currentPageViewModel = welcomeViewModel
      setAppViewModel(state)
   })

   return (
      <ShopContext.Provider
         value={{
            appViewModel: appViewModel,
            useCases: {
               SeeWelcome: new SeeWelcome(welcomePresenter),
               SeeBikes: new SeeBikes(storage, bikesPresenter)
            },
         }}
      >
         {props.children}
      </ShopContext.Provider>
   )
}
