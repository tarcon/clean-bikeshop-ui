import React from "react"
import ReactDOM from "react-dom"
import App from "./Presentation/React/App"
import "./Presentation/Css/tailwind.css"
import { ShopContextProvider } from "./Presentation/ShopContextProvider"

ReactDOM.render(
   <>
      <ShopContextProvider>
         <App />
      </ShopContextProvider>
   </>,
   document.getElementById("root")
)