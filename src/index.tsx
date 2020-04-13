import React from "react"
import ReactDOM from "react-dom"
import App from "./Presentation/App"
import { ShopContextProvider } from "./Presentation/ShopContextProvider"
import { BikeBackendGateway } from "./Shop/network/BikeBackendGateway"
import { CartStorageGateway } from "./Shop/storage/CartStorageGateway"

const bikeBackend = new BikeBackendGateway()
const cartStorage = new CartStorageGateway()

ReactDOM.render(
   <>
      <ShopContextProvider bikeBackend={bikeBackend} cartStorage={cartStorage}>
         <App />
      </ShopContextProvider>
   </>,
   document.getElementById("root")
)
