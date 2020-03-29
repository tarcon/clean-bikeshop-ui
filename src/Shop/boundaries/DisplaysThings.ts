import { SeeBikesOutput } from "../use-cases/SeeBikesOutput"

export interface DisplaysThings {
   showBikes: (presentableBikes: SeeBikesOutput) => any
}