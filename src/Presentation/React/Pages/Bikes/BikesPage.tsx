import { BikesViewModel } from "../../../../Shop/presenter/BikesViewModel"
import React from "react"

export function BikesPage(props: { bikesViewModel: BikesViewModel }) {
   return <div className="p-8">
      <h2>Bikes</h2>
      <div className="grid grid-flow-col gap-4 top">
         {props.bikesViewModel.map(bike =>
            <BikeProductCard key={bike.name}
                             name={bike.name}
                             price={bike.price}
                             description={bike.description}/>,
         )}
      </div>
   </div>
}

function BikeProductCard({ name, price, description }: any) {

   const selectBikeImageSrc = (name: string) => {
      switch (name) {
         case "Carbono R3":
            return "./img/carbono.jpg"
         case "Generalized Asphalt G-Works":
            return "./img/gworks.jpg"
         case "Dungeon Ultra SLX":
            return "./img/dungeon.jpg"
      }
   }

   return <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10 object-top">
      <div className="px-4 py-2 h-32">
         <h3 className="text-gray-900 font-bold text-1xl uppercase">{name}</h3>
         <p className="text-gray-600 text-sm mt-1">{description}</p>
      </div>
      <img className="h-56 w-full object-cover mt-2"
           src={selectBikeImageSrc(name)}
           alt="NIKE AIR"/>
      <div className="flex items-center justify-between px-4 py-2 bg-blue-700">
         <h1 className="text-gray-200 font-bold text-xl">{price}</h1>
         <button className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">Add to cart</button>
      </div>
   </div>

}
