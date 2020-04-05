import React, { useState } from "react"
import { BikeStorageGateway } from "../Shop/storage/BikeStorageGateway"
import { BikesPresenter } from "../Shop/presenter/BikesPresenter"
import { Pages, ShopContext } from "./ShopContext"
import { SeeBikes } from "../Shop/use-cases/SeeBikes"

export function ShopContextProvider(props: { children: React.ReactNode }) {
   let [appViewModel, setAppViewModel] = useState({
      currentPage: Pages.Welcome,
      currentPageViewModel: {}
   })

   const storage = new BikeStorageGateway()

   const bikesPresenter = new BikesPresenter(bikesViewModel => {
      const state = { ...appViewModel }
      state.currentPage = Pages.Bikes
      state.currentPageViewModel = bikesViewModel
      setAppViewModel(state)
   })

   const handleNavigateTo = (page: Pages) => {
      const state = { ...appViewModel }
      state.currentPage = page
      setAppViewModel(state)
   }

   return (
      <ShopContext.Provider
         value={{
            appViewModel: appViewModel,
            useCases: { SeeBikes: new SeeBikes(storage, bikesPresenter) },
            navigateTo: handleNavigateTo,
         }}
      >
         {props.children}
      </ShopContext.Provider>
   )
}
