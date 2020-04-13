import React, { useEffect, useState } from "react"
import { BikesPresenter } from "../Shop/presenter/BikesPresenter"
import { Pages, ShopContext } from "./ShopContext"
import { SeeBikes } from "../Shop/use-cases/SeeBikes"
import { WelcomePresenter } from "../Shop/presenter/WelcomePresenter"
import { SeeWelcome } from "../Shop/use-cases/SeeWelcome"
import { BikeBackendGateway } from "../Shop/network/BikeBackendGateway"
import { CartPresenter } from "../Shop/presenter/CartPresenter"
import { AddBikeToCart } from "../Shop/use-cases/AddBikeToCart"
import { CartStorageGateway } from "../Shop/storage/CartStorageGateway"
import { CartViewModel } from "../Shop/presenter/CartViewModel"

export type AppViewModel = {
   currentPage: Pages
   shoppingCartViewModel?: CartViewModel
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

   const cartPresenter = new CartPresenter(cartViewModel => {
      const state = {
         ...appViewModel,
         shoppingCartViewModel: cartViewModel,
      }
      setAppViewModel(state)
   })

   const cartStorage = new CartStorageGateway()

   const useCases = {
      SeeWelcome: new SeeWelcome(welcomePresenter),
      SeeBikes: new SeeBikes(bikeBackend, bikesPresenter),
      AddBikeToCart: new AddBikeToCart(bikeBackend, cartStorage, cartPresenter),
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
