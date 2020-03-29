import React from "react"
import { BikeStorageGateway } from "../Shop/storage/BikeStorageGateway"
import { BikePresenter } from "../Shop/presenter/BikePresenter"
import { ShopContext } from "./ShopContext"
import { SeeBikes } from "../Shop/use-cases/SeeBikes"

export function ShopContextProvider(props: { children: React.ReactNode }) {
   const storage = new BikeStorageGateway()
   const presenter = new BikePresenter(viewModel => {
      console.log(viewModel)
   })

   return (
      <ShopContext.Provider
         value={{
            useCases: { SeeBikes: new SeeBikes(storage, presenter) },
         }}
      >
         {props.children}
      </ShopContext.Provider>
   )
}
