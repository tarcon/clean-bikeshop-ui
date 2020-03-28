import { BikePersistenceInterface } from "../persistence/BikePersistenceInterface"

export class SeeBikes {

   private _bikePersistence: BikePersistenceInterface

   constructor(bikePersistence: BikePersistenceInterface) {
      this._bikePersistence = bikePersistence
   }

   public execute() {

   }
}