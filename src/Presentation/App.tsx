import React, { useContext, useState } from "react"
import { ShopContext } from "./ShopContext"
import cyclistSvg from "./cyclist.svg"
import { BikesViewModel } from "../Shop/presenter/BikesViewModel"
import { WelcomeViewModel } from "../Shop/presenter/WelcomeViewModel"
import { AppViewModel } from "./ShopContextProvider"
import { BikesPage } from "./pages/bikes/BikesPage"
import { WelcomePage } from "./pages/welcome/WelcomePage"
import { ProgressIndicator } from "./components/ProgressIndicator"

function App() {
   const shopContext = useContext(ShopContext)
   const [isLoading, setLoading] = useState(false)

   const content = routeToCurrentPage(shopContext.appViewModel)

   function routeToCurrentPage(appViewModel: AppViewModel) {
      switch (appViewModel.currentPage) {
         case "Welcome":
            return (
               <WelcomePage
                  welcomeViewModel={
                     appViewModel.currentPageViewModel as WelcomeViewModel
                  }
               />
            )
         case "Bikes":
            return (
               <BikesPage
                  bikesViewModel={
                     appViewModel.currentPageViewModel as BikesViewModel
                  }
               />
            )
         case "Empty":
         default:
            return <div />
      }
   }

   const handleNavigateWelcome = async () => {
      setLoading(true)
      await shopContext.useCases["SeeWelcome"].execute()
      setLoading(false)
   }

   const handleNavigateBikes = async () => {
      setLoading(true)
      await shopContext.useCases["SeeBikes"].execute()
      setLoading(false)
   }

   return (
      <>
         <Header />
         <ul className="flex p-8">
            <li className="mr-6">
               <button
                  className="text-blue-500 hover:text-blue-800"
                  onClick={handleNavigateWelcome}
               >
                  Welcome
               </button>
            </li>
            <li className="mr-6">
               <button
                  className="text-blue-500 hover:text-blue-800"
                  onClick={handleNavigateBikes}
               >
                  See Bikes
               </button>
            </li>
            <li className="mr-6">
               <button className="text-gray-400 cursor-not-allowed">
                  Shopping Cart
               </button>
            </li>
         </ul>
         <hr />
         {isLoading ? <ProgressIndicator /> : <section>{content}</section>}
      </>
   )
}

export default App

function Header() {
   return (
      <>
         <nav className="flex items-center justify-between flex-wrap bg-blue-700 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
               <img src={cyclistSvg} style={{ width: 220 }} alt="Logo" />
               <span className="font-semibold text-xl">Online Bikeshop</span>
            </div>
         </nav>
      </>
   )
}
