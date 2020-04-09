export class Bike {
   private _name: string
   private _price: number
   private _productImageUrl: string
   private _description: string

   constructor(name: string, price: number, productImageUrl: string, description: string) {
      this._name = name
      this._price = price
      this._productImageUrl = productImageUrl
      this._description = description
   }

   get name(): string {
      return this._name
   }

   get price(): number {
      return this._price
   }

   get productImageUrl(): string {
      return this._productImageUrl
   }

   get description(): string {
      return this._description
   }
}
