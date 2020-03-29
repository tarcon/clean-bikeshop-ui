import { DisplaysThings } from "../boundaries/DisplaysThings"
import { SeeBikesOutput } from "../use-cases/SeeBikesOutput"

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

type BikesViewModel = Array<BikeViewModel>

type BikeViewModel = {
   name: string
   price: string
   description: string
}
