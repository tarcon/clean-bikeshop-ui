import React from "react"
import ReactDOM from "react-dom"
import App from "./Presentation/App"
import "./Presentation/css/tailwind.css"
import { ShopContextProvider } from "./Presentation/ShopContextProvider"

ReactDOM.render(
   <>
      <ShopContextProvider>
         <App />
      </ShopContextProvider>
   </>,
   document.getElementById("root")
)
