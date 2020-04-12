import { Cart } from "./Cart"
import { Bike } from "./Bike"

describe("Cart", () => {
   it("can be created without bikes", () => {
      const cart = new Cart()
      expect(cart).toBeDefined()
   })

   it("can add a bike", () => {
      const cart = new Cart()
      const bike = new Bike("bike", 1337, "pic.jpg", "description")

      cart.addBike(bike)

      expect(cart.bikes).toHaveLength(1)
      expect(cart.bikes[0]).toBe(bike)
   })
})
