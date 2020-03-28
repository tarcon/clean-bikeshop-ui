import { Bike } from "./Bike"

describe("Bike", () => {
   it("can be created with all its properties", () => {
      const bike = new Bike("name", 1337, "description")
      expect(bike.name).toBe("name")
      expect(bike.price).toBe(1337)
      expect(bike.description).toBe("description")
   })
})
