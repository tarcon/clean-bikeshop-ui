import { ProvidesBikes } from "../boundaries/ProvidesBikes"
import { DisplaysBikes } from "../boundaries/DisplaysBikes"
import { Bike } from "../entities/Bike"
import { SeeBikeOutput, SeeBikesOutput } from "./SeeBikesOutput"

export class SeeBikes {
   private _bikeStorage: ProvidesBikes
   private _ui: DisplaysBikes

   constructor(bikeStorage: ProvidesBikes, ui: DisplaysBikes) {
      this._bikeStorage = bikeStorage
      this._ui = ui
   }

   public execute(): void {
      const fetchedBikes = this._bikeStorage.fetchPurchasableBikes()

      const bikesOutput = SeeBikes.mapToOutput(fetchedBikes)
      this._ui.showBikes(bikesOutput)
   }

   private static mapToOutput(bikes: Array<Bike>): SeeBikesOutput {
      return bikes.map(SeeBikes.mapBikeToBikeOutput)
   }

   private static mapBikeToBikeOutput(bike: Bike): SeeBikeOutput {
      return {
         name: bike.name,
         price: bike.price,
         productImageUrl: bike.productImageUrl,
         description: bike.description,
      }
   }
}
