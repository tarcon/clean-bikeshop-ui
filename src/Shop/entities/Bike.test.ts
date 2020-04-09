import { Bike } from "./Bike"

describe("Bike", () => {
   it("can be created with all its properties", () => {
      const bike = new Bike("name", 1337, "someUrl", "description")
      expect(bike.name).toBe("name")
      expect(bike.price).toBe(1337)
      expect(bike.productImageUrl).toBe("someUrl")
      expect(bike.description).toBe("description")
   })
})
