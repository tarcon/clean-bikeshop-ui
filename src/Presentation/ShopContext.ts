import React from "react"

export enum Pages {
   Welcome = "Welcome",
   Bikes = "Bikes",
}

export type ShopContextValueType = {
   useCases: object
   appViewModel: AppViewModelType
   navigateTo: (page: Pages) => void
}

export type AppViewModelType = {
   currentPage: Pages
}

function initializeShopContextValue(): ShopContextValueType {
   return {
      useCases: {},
      appViewModel: {
         currentPage: Pages.Welcome,
      },
      navigateTo: () => {},
   }
}

export const ShopContext = React.createContext<ShopContextValueType>(
   initializeShopContextValue()
)
