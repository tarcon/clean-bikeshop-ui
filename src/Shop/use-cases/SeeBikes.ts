import { ProvidesBikes } from "../storage/ProvidesBikes"

export class SeeBikes {
   private _bikeStorage: ProvidesBikes

   constructor(bikeStorage: ProvidesBikes) {
      this._bikeStorage = bikeStorage
   }

   public execute(): void {

   }

}