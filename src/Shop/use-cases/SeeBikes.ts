import { ProvidesBikes } from "../storage/ProvidesBikes"
import { Bike } from "../entities/Bike"

export class SeeBikes {
   private _bikeStorage: ProvidesBikes

   constructor(bikeStorage: ProvidesBikes) {
      this._bikeStorage = bikeStorage
   }

   public execute(): Array<Bike> {
      return []
   }

}