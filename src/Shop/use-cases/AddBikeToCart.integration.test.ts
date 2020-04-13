import { AddBikeToCart } from "./AddBikeToCart"
import { AddBikeToCartInput } from "./AddBikeToCartInput"
import { StoresCart } from "../boundaries/StoresCart"
import { aBike } from "../entities/BikeProvisioning"
import { ProvidesBike } from "../boundaries/ProvidesBike"
import { DisplaysError } from "../boundaries/DisplaysError"

describe("AddBikeToCart", () => {
   let cart: StoresCart
   let backendWithABike: ProvidesBike
   let backendWithoutBikes: ProvidesBike
   let ui: DisplaysError

   it("can be executed to add a bike", async () => {
      const useCase = new AddBikeToCart(backendWithABike, cart, ui)

      const oneBikeToAdd: AddBikeToCartInput = {
         ean: 12345,
      }

      expect(async () => {
         await useCase.execute(oneBikeToAdd)
      }).not.toThrow()
   })

   it("can store an added bike", async () => {
      const useCase = new AddBikeToCart(backendWithABike, cart, ui)

      const oneBikeToAdd: AddBikeToCartInput = {
         ean: 123,
      }

      await useCase.execute(oneBikeToAdd)

      expect(backendWithABike.fetchBikeByEAN).toHaveBeenCalledWith(123)
      expect(cart.addBike).toHaveBeenCalledWith(aBike({ ean: 123 }))
   })

   it("displays an error if the added bike is not available in the purchasable bikes", async () => {
      const useCase = new AddBikeToCart(backendWithoutBikes, cart, ui)

      const oneBikeToAdd: AddBikeToCartInput = {
         ean: 456,
      }

      await useCase.execute(oneBikeToAdd)

      expect(backendWithoutBikes.fetchBikeByEAN).toHaveBeenCalledWith(456)
      expect(cart.addBike).not.toHaveBeenCalled()
      expect(ui.displayError).toHaveBeenCalled()
   })

   beforeEach(() => {
      jest.resetAllMocks()

      cart = {
         addBike: jest.fn(),
      } as StoresCart

      backendWithABike = {
         fetchBikeByEAN: jest.fn().mockReturnValue(aBike({ ean: 123 })),
      }

      backendWithoutBikes = {
         fetchBikeByEAN: jest
            .fn()
            .mockRejectedValue("404 - bike not found with ean"),
      }

      ui = {
         displayError: jest.fn(),
      }
   })
})
