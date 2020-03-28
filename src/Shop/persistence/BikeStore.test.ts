import { BikeStore } from "./BikeStore"
import { BikeDatabase } from "./BikeDatabase"
import { Bike } from "../entities/Bike"

describe("Bike persistence", () => {
   it("can load available bikes", () => {
      const bikes = BikeStore.loadAvailableBikes()
      expect(bikes).toHaveLength(3)
   })

   it("can map stored bike entity to domain bike entity", () => {
      BikeDatabase.StoredBikes = [
         { name: "name", price: "1337", description: "description" },
      ]

      const expectedBike = new Bike("name", 1337, "description")

      expect(BikeStore.loadAvailableBikes()).toHaveLength(1)
      expect(BikeStore.loadAvailableBikes()[0]).toStrictEqual(expectedBike)
   })
})
