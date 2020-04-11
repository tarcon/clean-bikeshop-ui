import React from "react"
import ReactDOM from "react-dom"
import App from "./Presentation/App"
import { ShopContextProvider } from "./Presentation/ShopContextProvider"

ReactDOM.render(
   <>
      <ShopContextProvider>
         <App />
      </ShopContextProvider>
   </>,
   document.getElementById("root")
)
