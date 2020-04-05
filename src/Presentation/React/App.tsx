import React, { useContext } from "react"
import { AppViewModelType, ShopContext } from "../ShopContext"
import cyclistSvg from "./cyclist.svg"
import cleanCodeImage from "./cleancode.jpg"
import dungeonBikeImage from "./dungeon.jpg"
import gworksBikeImage from "./gworks.jpg"
import carbonoBikeImage from "./carbono.jpg"
import { BikesViewModel } from "../../Shop/presenter/BikesViewModel"
import { WelcomeViewModel } from "../../Shop/presenter/WelcomeViewModel"

function App() {
   const shopContext = useContext(ShopContext)

   const content = routeToCurrentPage(shopContext.appViewModel)

   const handleNavigateWelcome = () => {
      shopContext.useCases["SeeWelcome"].execute()
   }

   const handleNavigateBikes = () => {
      shopContext.useCases["SeeBikes"].execute()
   }

   return (
      <>
         <Header/>
         <ul className="flex p-8">
            <li className="mr-6">
               <button className="text-blue-500 hover:text-blue-800" onClick={handleNavigateWelcome}>Welcome</button>
            </li>
            <li className="mr-6">
               <button className="text-blue-500 hover:text-blue-800" onClick={handleNavigateBikes}>See Bikes</button>
            </li>
            <li className="mr-6">
               <button className="text-gray-400 cursor-not-allowed">Shopping Cart</button>
            </li>
         </ul>
         <hr/>
         <section>
            {content}
         </section>
      </>
   )
}

export default App


function Header() {
   return <>
      <nav className="flex items-center justify-between flex-wrap bg-blue-700 p-6">
         <div className="flex items-center flex-shrink-0 text-white mr-6">
            <img src={cyclistSvg} style={{ width: 220 }} alt="Logo"/>
            <span className="font-semibold text-xl">Online Bikeshop</span>
         </div>
      </nav>
   </>
}

function WelcomePage(props: { welcomeViewModel: WelcomeViewModel }) {
   return <div className="p-8">
      <div className="flex mb-4">
         <div className="w-1/2 h-12">
            <p>{props.welcomeViewModel.welcomeText}</p>
         </div>
         <div className="w-1/2 h-12">
            <div className="flex items-center">
               <img src={cleanCodeImage} alt="Powered by clean code" className="m-4"/>
            </div>
         </div>
      </div>
   </div>
}

function BikesPage(props: { bikesViewModel: BikesViewModel }) {
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

   const selectBikeImage = (name: string) => {
      switch (name) {
         case "Carbono R3":
            return carbonoBikeImage
         case "Generalized Asphalt G-Works":
            return gworksBikeImage
         case "Dungeon Ultra SLX":
            return dungeonBikeImage
      }
   }

   return <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10 object-top">
      <div className="px-4 py-2 h-32">
         <h3 className="text-gray-900 font-bold text-1xl uppercase">{name}</h3>
         <p className="text-gray-600 text-sm mt-1">{description}</p>
      </div>
      <img className="h-56 w-full object-cover mt-2"
           src={selectBikeImage(name)}
           alt="NIKE AIR"/>
      <div className="flex items-center justify-between px-4 py-2 bg-blue-700">
         <h1 className="text-gray-200 font-bold text-xl">{price}</h1>
         <button className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">Add to cart</button>
      </div>
   </div>

}

function routeToCurrentPage(appViewModel: AppViewModelType) {
   switch (appViewModel.currentPage) {
      case "Welcome":
         return <WelcomePage welcomeViewModel={appViewModel.currentPageViewModel as WelcomeViewModel}/>
      case "Bikes":
         return <BikesPage bikesViewModel={appViewModel.currentPageViewModel as BikesViewModel}/>
   }
}