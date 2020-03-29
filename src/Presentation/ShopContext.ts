import React from "react"
import { BikesViewModel } from "../Shop/presenter/BikesViewModel"

export enum Pages {
   Welcome = "Welcome",
   Bikes = "Bikes",
}

export type ShopContextValueType = {
   useCases: { [x: string]: any }
   appViewModel: AppViewModelType
   navigateTo: (page: Pages) => void
}

export type AppViewModelType = {
   currentPage: Pages
   currentPageViewModel: BikesViewModel | any
}

function initializeShopContextValue(): ShopContextValueType {
   return {
      useCases: {},
      appViewModel: {
         currentPage: Pages.Welcome,
         currentPageViewModel: {}
      },
      navigateTo: () => {},
   }
}

export const ShopContext = React.createContext<ShopContextValueType>(
   initializeShopContextValue()
)
