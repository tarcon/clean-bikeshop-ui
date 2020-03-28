import { ProvidesBikes } from "../boundaries/ProvidesBikes"
import { DisplaysThings } from "../boundaries/DisplaysThings"

export class SeeBikes {
   private _bikeStorage: ProvidesBikes
   private _ui: DisplaysThings

   constructor(bikeStorage: ProvidesBikes, ui: DisplaysThings) {
      this._bikeStorage = bikeStorage
      this._ui = ui
   }

   public execute(): void {

   }

}

export type SeeBikesOutput = [
   { name: string, price: number, description: string }
]