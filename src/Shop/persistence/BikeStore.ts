import { BikeDatabase, StoredBike } from "./BikeDatabase"
import { Bike } from "../entities/Bike"
import { BikePersistenceInterface } from "./BikePersistenceInterface"

export class BikeStore implements BikePersistenceInterface {
   public static loadAvailableBikes(): Array<Bike> {
      return BikeDatabase.StoredBikes.map(BikeStore.mapToBike)
   }

   private static mapToBike(storedBike: StoredBike): Bike {
      return new Bike(
         storedBike.name,
         parseInt(storedBike.price),
         storedBike.description
      )
   }
}
