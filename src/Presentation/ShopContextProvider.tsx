import React, { useState } from "react"
import { BikeStorageGateway } from "../Shop/storage/BikeStorageGateway"
import { BikePresenter } from "../Shop/presenter/BikePresenter"
import { Pages, ShopContext } from "./ShopContext"
import { SeeBikes } from "../Shop/use-cases/SeeBikes"

export function ShopContextProvider(props: { children: React.ReactNode }) {
   let [appViewModel, setAppViewModel] = useState({
      currentPage: Pages.Welcome,
   })

   const storage = new BikeStorageGateway()
   const presenter = new BikePresenter(viewModel => {
      console.log(viewModel)
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
            useCases: { SeeBikes: new SeeBikes(storage, presenter) },
            navigateTo: handleNavigateTo,
         }}
      >
         {props.children}
      </ShopContext.Provider>
   )
}
