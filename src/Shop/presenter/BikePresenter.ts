import { DisplaysThings } from "../boundaries/DisplaysThings"
import { SeeBikesOutput } from "../use-cases/SeeBikesOutput"
import { BikesViewModel } from "./BikesViewModel"

export class BikePresenter implements DisplaysThings {
   public showBikes(presentableBikes: SeeBikesOutput): BikesViewModel {
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
