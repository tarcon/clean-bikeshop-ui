import { BikeDatabase, StoredBike } from "./BikeDatabase"
import { Bike } from "../entities/Bike"

export class BikeStore {
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
