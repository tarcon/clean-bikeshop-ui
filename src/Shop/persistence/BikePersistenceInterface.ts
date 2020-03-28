import { Bike } from "../entities/Bike"

export abstract class BikePersistenceInterface {
   public static loadAvailableBikes: Array<Bike>
}