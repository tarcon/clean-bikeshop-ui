import { DisplaysThings } from "../boundaries/DisplaysThings"
import { SeeBikesOutput } from "../use-cases/SeeBikesOutput"
import { BikesViewModel } from "./BikesViewModel"

export class BikePresenter implements DisplaysThings {

   private _renderFn: (viewModel: any) => void

   constructor(renderFn: (viewModel: BikesViewModel) => void) {
      this._renderFn = renderFn
   }

   public showBikes(presentableBikes: SeeBikesOutput) {
      const viewModel = this.createBikesViewModel(presentableBikes)
      this._renderFn(viewModel)
   }

   private createBikesViewModel(presentableBikes: SeeBikesOutput) {
      return presentableBikes.map(bike => ({
         name: bike.name,
         price: bike.price.toLocaleString("de-DE", {
            style: "currency",
            currency: "EUR",
         }),
         description: bike.description,
      }))
   }

}
