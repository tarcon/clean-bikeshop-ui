import React, { useEffect, useState } from "react"
import { BikesPresenter } from "../Shop/presenter/BikesPresenter"
import { Pages, ShopContext } from "./ShopContext"
import { SeeBikes } from "../Shop/use-cases/SeeBikes"
import { WelcomePresenter } from "../Shop/presenter/WelcomePresenter"
import { SeeWelcome } from "../Shop/use-cases/SeeWelcome"
import { BikeBackendGateway } from "../Shop/network/BikeBackendGateway"

export type AppViewModel = {
   currentPage: Pages
   currentPageViewModel: object
}

export function ShopContextProvider(props: { children: React.ReactNode }) {
   let [appViewModel, setAppViewModel] = useState<AppViewModel>({
      currentPage: Pages.Empty,
      currentPageViewModel: {},
   })

   const bikeBackend = new BikeBackendGateway()

   const welcomePresenter = new WelcomePresenter(welcomeViewModel => {
      const state = {
         ...appViewModel,
         currentPage: Pages.Welcome,
         currentPageViewModel: welcomeViewModel,
      }
      setAppViewModel(state)
   })

   const bikesPresenter = new BikesPresenter(bikesViewModel => {
      const state = {
         ...appViewModel,
         currentPage: Pages.Bikes,
         currentPageViewModel: bikesViewModel,
      }
      setAppViewModel(state)
   })

   const useCases = {
      SeeWelcome: new SeeWelcome(welcomePresenter),
      SeeBikes: new SeeBikes(bikeBackend, bikesPresenter),
   }

   useEffect(() => {
      useCases["SeeWelcome"].execute()
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   return (
      <ShopContext.Provider
         value={{
            appViewModel: appViewModel,
            useCases: useCases,
         }}
      >
         {props.children}
      </ShopContext.Provider>
   )
}
