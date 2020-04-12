import { AddBikeToCart } from "./AddBikeToCart"
import { AddBikeToCartInput } from "./AddBikeToCartInput"

describe("AddBikeToCart", () => {
   it("can be executed to add a bike", () => {
      const useCase = new AddBikeToCart()

      const oneBikeToAdd: AddBikeToCartInput = {
         ean: 12345,
      }

      expect(() => {
         useCase.execute(oneBikeToAdd)
      }).not.toThrow()
   })
})
