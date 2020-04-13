import React, { useContext } from "react"
import { ShopContext } from "./ShopContext"

export function ShoppingCart() {
   const shopContext = useContext(ShopContext)

   const shoppingCartViewModel = shopContext.appViewModel.shoppingCartViewModel

   if (!shoppingCartViewModel) return null

   const cartBikes = shoppingCartViewModel.bikes.map(bike => (
      <div key={bike.name}>
         {bike.name} - {bike.price}
      </div>
   ))

   return (
      <div className="p-8">
         <h3>Shopping Cart</h3>
         {cartBikes}
         Total price: {shoppingCartViewModel.totalPrice}
      </div>
   )
}
