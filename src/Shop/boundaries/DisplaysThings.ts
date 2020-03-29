import { SeeBikesOutput } from "../use-cases/SeeBikesOutput"

export interface DisplaysThings {
   showBikes: (bikesToPresent: SeeBikesOutput) => any
}