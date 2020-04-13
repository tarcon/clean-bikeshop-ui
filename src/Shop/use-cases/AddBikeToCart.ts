import { AddBikeToCartInput } from "./AddBikeToCartInput"
import { StoresCart } from "../boundaries/StoresCart"
import { ProvidesBike } from "../boundaries/ProvidesBike"
import { DisplaysError } from "../boundaries/DisplaysError"

export class AddBikeToCart {
   private _cartStorage: StoresCart
   private _bikeBackend: ProvidesBike
   private _ui: DisplaysError

   constructor(
      bikeBackend: ProvidesBike,
      cartStorage: StoresCart,
      ui: DisplaysError
   ) {
      this._cartStorage = cartStorage
      this._bikeBackend = bikeBackend
      this._ui = ui
   }

   async execute(bikeToAdd: AddBikeToCartInput): Promise<void> {
      try {
         const bike = await this._bikeBackend.fetchBikeByEAN(bikeToAdd.ean)
         this._cartStorage.addBike(bike)
      } catch (e) {
         this._ui.displayError(e.message)
      }
   }
}
