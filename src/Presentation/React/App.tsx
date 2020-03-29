import React, { useContext } from "react"
import { AppViewModelType, Pages, ShopContext } from "../ShopContext"
import cyclistSvg from "./cyclist.svg"
import cleanCodeImage from "./cleancode.jpg"

function App() {
   const shopContext = useContext(ShopContext)

   const content = routeToCurrentPage(shopContext.appViewModel)

   const handleNavigateWelcome = () => {
      shopContext.navigateTo(Pages.Welcome)
   }

   const handleNavigateBikes = () => {
      shopContext.navigateTo(Pages.Bikes)
   }

   return (
      <>
         <Header/>
         <ul className="flex p-8">
            <li className="mr-6">
               <a className="text-blue-500 hover:text-blue-800" href="#" onClick={handleNavigateWelcome}>Welcome</a>
            </li>
            <li className="mr-6">
               <a className="text-blue-500 hover:text-blue-800" href="#" onClick={handleNavigateBikes}>See Bikes</a>
            </li>
            <li className="mr-6">
               <a className="text-gray-400 cursor-not-allowed" href="#">Shopping Cart</a>
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

function WelcomePage() {
   return <div className="p-8">
      <div className="flex mb-4">
         <div className="w-1/2 h-12">
            <p> Welcome to our online bikeshop with clean architecture. Order your bike in the knowledge that our
               digital systems are built in the technically most sustainable way imaginable.</p>
         </div>
         <div className="w-1/2 h-12">
            <div className="flex items-center">
               <img src={cleanCodeImage} alt="Powered by clean code" className="m-4"/>
            </div>
         </div>
      </div>
   </div>
}

function BikesPage() {
   return <div className="p-8">
      <h2>Bikes</h2>
   </div>
}

function routeToCurrentPage(appViewModel: AppViewModelType) {
   switch (appViewModel.currentPage) {
      case "Welcome":
         return <WelcomePage/>
      case "Bikes":
         return <BikesPage/>
   }
}