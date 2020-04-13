import { CartPresenter } from "./CartPresenter"
import { CartBikeOutput } from "../use-cases/AddBikeToCartOutput"

describe("CartPresenter", () => {
   let testRenderFn: () => void

   it("generates empty view model for cart without bikes", () => {
      const presenter = new CartPresenter(testRenderFn)

      const cartOutput = {
         bikes: [],
         totalPrice: 0,
      }

      presenter.displayCart(cartOutput)

      expect(testRenderFn).toHaveBeenCalledWith({
         bikes: [],
         totalPrice: "0,00 €",
      })
   })

   it("generates a view model for a filled cart", () => {
      const presenter = new CartPresenter(testRenderFn)

      const cartOutput = {
         bikes: [
            {
               name: "Bike",
               price: 1337,
            } as CartBikeOutput,
         ],
         totalPrice: 1337,
      }

      presenter.displayCart(cartOutput)

      expect(testRenderFn).toHaveBeenCalledWith({
         bikes: [{ name: "Bike", price: "1.337,00 €" }],
         totalPrice: "1.337,00 €",
      })
   })

   beforeEach(() => {
      testRenderFn = jest.fn()
   })
})
