export type StoredBike = {
   name: string
   price: string
   productImageFileName: string,
   description: string
}

export class BikeStorage {
   public static StoredBikes: Array<StoredBike> = [
      {
         name: "Carbono R3",
         price: "4499",
         productImageFileName: "carbono.jpg",
         description:
            "A racing bike with a long heritage of classic race wins. Prefered by dentists.",
      },
      {
         name: "Generalized Asphalt G-Works",
         price: "7999",
         productImageFileName: "gworks.jpg",
         description:
            "An even racier bike used by most of the professional riders. Made in china, but priced like artisan work from the USA.",
      },
      {
         name: "Dungeon Ultra SLX",
         price: "5699",
         productImageFileName: "dungeon.jpg",
         description: "German engineered racing bike with nice looks.",
      },
   ]
}
