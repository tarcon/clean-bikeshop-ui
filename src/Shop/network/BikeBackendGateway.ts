import { ProvidesBikes } from "../boundaries/ProvidesBikes"
import { Bike } from "../entities/Bike"
import { StoredBikeDto } from "./dto/StoredBikeDto"

export class BikeBackendGateway implements ProvidesBikes {

   constructor() {
   }

   async fetchPurchasableBikes(): Promise<Array<Bike>> {
      const storedBikes = await fetch("http://api.bikeshop.de/bikes")
      return storedBikes.map(BikeBackendGateway.mapToBike)
   }

   private static mapToBike(dto: StoredBikeDto) {
      return new Bike(dto.name,
         dto.price,
         dto.productImageFileName,
         dto.description)
   }
}

//overwrite fetch() with a hardcoded response because we don't have a real backend
function fetch(url: any): Promise<Array<StoredBikeDto>> {

   const data = [
      {
         name: "Carbono R3",
         price: 4499,
         productImageFileName: "carbono.jpg",
         description:
            "A racing bike with a long heritage of classic race wins. Prefered by dentists.",
      },
      {
         name: "Generalized Asphalt G-Works",
         price: 7999,
         productImageFileName: "gworks.jpg",
         description:
            "An even racier bike used by most of the professional riders. Made in china, but priced like artisan work from the USA.",
      },
      {
         name: "Dungeon Ultra SLX",
         price: 5699,
         productImageFileName: "dungeon.jpg",
         description: "German engineered racing bike with nice looks.",
      },
   ]

   return new Promise((resolve, reject) => {
      setTimeout(() => {
            resolve(data)
         },
         1000)
   })
}
