import { BikeStorageGateway } from "./BikeStorageGateway"
import { BikeStorage } from "./BikeStorage"
import { Bike } from "../entities/Bike"

describe("Bike storage", () => {
   it("can load available bikes", async () => {
      const bikes = await new BikeStorageGateway().fetchPurchasableBikes()
      expect(bikes).toHaveLength(3)
   })

   it("can map stored bike entity to domain bike entity", async () => {
      BikeStorage.StoredBikes = [
         {
            ean: 789,
            name: "name",
            price: 1337,
            productImageFileName: "file.jpg",
            description: "description",
         },
      ]
      const expectedBike = new Bike(
         789,
         "name",
         1337,
         "file.jpg",
         "description"
      )

      const fetchedBikes = await new BikeStorageGateway().fetchPurchasableBikes()

      expect(fetchedBikes).toHaveLength(1)
      expect(fetchedBikes[0]).toStrictEqual(expectedBike)
   })

   it("returns no bikes when no bikes are stored", async () => {
      BikeStorage.StoredBikes = []

      const fetchedBikes = await new BikeStorageGateway().fetchPurchasableBikes()

      expect(fetchedBikes).toStrictEqual([])
   })

   it("returns available stored bikes", async () => {
      BikeStorage.StoredBikes = [
         {
            ean: 123,
            name: "name",
            price: 1337,
            productImageFileName: "file1.jpg",
            description: "description",
         },
         {
            ean: 456,
            name: "name2",
            price: 123,
            productImageFileName: "file2.jpg",
            description: "description2",
         },
      ]

      const fetchedBikes = await new BikeStorageGateway().fetchPurchasableBikes()

      expect(fetchedBikes).toHaveLength(2)
      expect(fetchedBikes[0]).toStrictEqual(
         new Bike(123, "name", 1337, "file1.jpg", "description")
      )
      expect(fetchedBikes[1]).toStrictEqual(
         new Bike(456, "name2", 123, "file2.jpg", "description2")
      )
   })
})
