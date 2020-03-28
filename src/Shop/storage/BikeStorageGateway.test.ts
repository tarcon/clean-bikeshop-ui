import { BikeStorageGateway } from "./BikeStorageGateway"
import { BikeStorage } from "./BikeStorage"
import { Bike } from "../entities/Bike"

describe("Bike storage", () => {

   it("can load available bikes", () => {
      const bikes = new BikeStorageGateway().fetchPurchasableBikes()
      expect(bikes).toHaveLength(3)
   })

   it("can map stored bike entity to domain bike entity", () => {
      BikeStorage.StoredBikes = [
         { name: "name", price: "1337", description: "description" },
      ]
      const expectedBike = new Bike("name", 1337, "description")

      const fetchedBikes = new BikeStorageGateway().fetchPurchasableBikes()

      expect(fetchedBikes).toHaveLength(1)
      expect(fetchedBikes[0]).toStrictEqual(expectedBike)
   })
})
