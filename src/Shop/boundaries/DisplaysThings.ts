import { SeeBikesOutput } from "../use-cases/SeeBikes"

export interface DisplaysThings {
   showBikes: (bikesToPresent: SeeBikesOutput) => any
}