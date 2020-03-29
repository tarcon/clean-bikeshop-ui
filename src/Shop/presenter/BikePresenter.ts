import { DisplaysThings } from "../boundaries/DisplaysThings"
import { SeeBikesOutput } from "../use-cases/SeeBikesOutput"

export class BikePresenter implements DisplaysThings {

   public showBikes(bikesToPresent: SeeBikesOutput): BikesViewModel {
      return bikesToPresent.map(bikeToPresent => ({
         name: bikeToPresent.name,
         price: bikeToPresent.price.toLocaleString("de-DE", {
            style: "currency",
            currency: "EUR"
         }),
         description: bikeToPresent.description
      }))
   }

}

type BikesViewModel = Array<BikeViewModel>

type BikeViewModel = {
   name: string
   price: string
   description: string
}