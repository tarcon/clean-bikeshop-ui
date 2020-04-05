import React from "react"

export enum Pages {
   Welcome = "Welcome",
   Bikes = "Bikes",
}

export type ShopContextValueType = {
   useCases: { [x: string]: any }
   appViewModel: AppViewModelType
}

export type AppViewModelType = {
   currentPage: Pages
   currentPageViewModel: object
}

function initializeShopContextValue(): ShopContextValueType {
   return {
      useCases: {},
      appViewModel: {
         currentPage: Pages.Welcome,
         currentPageViewModel: {},
      }
   }
}

export const ShopContext = React.createContext<ShopContextValueType>(
   initializeShopContextValue()
)
