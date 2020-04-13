import {
   BikesViewModel,
   BikeViewModel,
} from "../../../Shop/presenter/BikesViewModel"
import React, { useContext } from "react"
import { AddBikeToCartInput } from "../../../Shop/use-cases/AddBikeToCartInput"
import { ShopContext } from "../../ShopContext"

export function BikesPage(props: { bikesViewModel: BikesViewModel }) {
   return (
      <div className="p-8">
         <h2>Bikes</h2>
         <div className="grid grid-flow-col gap-4 top">
            {props.bikesViewModel.map(bike => (
               <BikeProductCard
                  key={bike.ean}
                  ean={bike.ean}
                  name={bike.name}
                  price={bike.price}
                  productImageUrl={bike.productImageUrl}
                  description={bike.description}
               />
            ))}
         </div>
      </div>
   )
}

function BikeProductCard({
   ean,
   name,
   price,
   productImageUrl,
   description,
}: BikeViewModel) {
   const shopContext = useContext(ShopContext)

   const handleAddToCart = () => {
      const addBikeToCartInput: AddBikeToCartInput = {
         ean: ean,
      }

      shopContext.useCases["AddBikeToCart"].execute(addBikeToCartInput)
   }

   return (
      <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10 object-top">
         <div className="px-4 py-2 h-32">
            <h3 className="text-gray-900 font-bold text-1xl uppercase">
               {name}
            </h3>
            <p className="text-gray-600 text-sm mt-1">{description}</p>
         </div>
         <img
            className="h-56 w-full object-cover mt-2"
            src={productImageUrl}
            alt={name}
         />
         <div className="flex items-center justify-between px-4 py-2 bg-blue-700">
            <h1 className="text-gray-200 font-bold text-xl">{price}</h1>
            <button
               className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded"
               onClick={handleAddToCart}
            >
               Add to cart
            </button>
         </div>
      </div>
   )
}
