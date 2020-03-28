export class Bike {
   private _name: string
   private _price: number
   private _description: string

   constructor(name: string, price: number, description: string) {
      this._name = name
      this._price = price
      this._description = description
   }

   get name(): string {
      return this._name
   }

   get price(): number {
      return this._price
   }

   get description(): string {
      return this._description
   }
}
