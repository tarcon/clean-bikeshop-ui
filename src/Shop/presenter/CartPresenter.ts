import { DisplaysCart } from "../boundaries/DisplaysCart"
import { AddBikeToCartOutput } from "../use-cases/AddBikeToCartOutput"
import { CartViewModel } from "./CartViewModel"

export class CartPresenter implements DisplaysCart {
   private _renderFn: (viewModel: any) => void

   constructor(renderFn: (viewModel: CartViewModel) => void) {
      this._renderFn = renderFn
   }

   displayCart(cartOutput: AddBikeToCartOutput): void {
      const viewModel = CartPresenter.createCartViewModel(cartOutput)
      this._renderFn(viewModel)
   }

   private static createCartViewModel(
      cartOutput: AddBikeToCartOutput
   ): CartViewModel {
      return {
         bikes: cartOutput.bikes.map(cartBike => ({
            name: cartBike.name,
            price: CartPresenter.formatGermanPrice(cartBike.price),
         })),
         totalPrice: CartPresenter.formatGermanPrice(cartOutput.totalPrice),
      }
   }

   private static formatGermanPrice(price: number) {
      return price.toLocaleString("de-DE", {
         style: "currency",
         currency: "EUR",
      })
   }
}
