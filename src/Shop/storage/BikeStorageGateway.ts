import { BikeStorage, StoredBike } from "./BikeStorage"
import { Bike } from "../entities/Bike"
import { ProvidesBikes } from "../boundaries/ProvidesBikes"

export class BikeStorageGateway implements ProvidesBikes {
   public fetchPurchasableBikes(): Array<Bike> {
      return BikeStorage.StoredBikes.map(BikeStorageGateway.mapToBike)
   }

   private static mapToBike(storedBike: StoredBike): Bike {
      return new Bike(
         storedBike.name,
         parseInt(storedBike.price),
         storedBike.description
      )
   }
}
