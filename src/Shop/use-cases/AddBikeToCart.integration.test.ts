import { AddBikeToCart } from "./AddBikeToCart"
import { DisplaysError } from "../boundaries/DisplaysError"
import { DisplaysCart } from "../boundaries/DisplaysCart"
import { BikeBackendGateway } from "../network/BikeBackendGateway"
import { CartStorageGateway } from "../storage/CartStorageGateway"

describe("AddBikeToCart", () => {
   let ui: DisplaysError & DisplaysCart

   it("displays the shopping cart with two bike", async () => {
      const backend = new BikeBackendGateway()
      const cart = new CartStorageGateway()

      const bikeToAdd = {
         ean: 123908123,
      }

      const useCase = new AddBikeToCart(backend, cart, ui)

      await useCase.execute(bikeToAdd)
      await useCase.execute(bikeToAdd)

      expect(ui.displayError).not.toHaveBeenCalled()
      expect(ui.displayCart).toHaveBeenCalledWith({
         bikes: [
            {
               name: "Carbono R3",
               price: 4499,
            },
            {
               name: "Carbono R3",
               price: 4499,
            },
         ],
         totalPrice: 8998,
      })
   })

   beforeEach(() => {
      jest.resetAllMocks()

      ui = {
         displayError: jest.fn(),
         displayCart: jest.fn(),
      }
   })
})
