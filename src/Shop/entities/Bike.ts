export class Bike {
   private _name: string
   private _price: number
   private _productImageFileName: string
   private _description: string

   constructor(name: string, price: number, productImageFileName: string, description: string) {
      this._name = name
      this._price = price
      this._productImageFileName = productImageFileName
      this._description = description
   }

   get name(): string {
      return this._name
   }

   get price(): number {
      return this._price
   }

   get productImageFileName(): string {
      return this._productImageFileName
   }

   get description(): string {
      return this._description
   }
}
