import { Bike } from "../entities/Bike"

export interface ProvidesBikes {
   fetchPurchasableBikes: () => Array<Bike>
}
