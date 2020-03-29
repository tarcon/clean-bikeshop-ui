import { SeeBikes } from "./SeeBikes"
import { DisplaysThings } from "../boundaries/DisplaysThings"
import { ProvidesBikes } from "../boundaries/ProvidesBikes"
import { Bike } from "../entities/Bike"


describe("SeeBikes use case", () => {
   let emptyBikeStorage = {
      fetchPurchasableBikes: jest.fn().mockReturnValue([]),
   } as ProvidesBikes

   let bikeStorage = {
      fetchPurchasableBikes: jest.fn().mockReturnValue(
         [{name: "Bike", price: 1000, description: "nice Bike" } as Bike]
      ),
   } as ProvidesBikes

   let ui = {
      showBikes: jest.fn()

   } as DisplaysThings

   it("can be executed", () => {
      const useCase = new SeeBikes(emptyBikeStorage, ui)

      expect(() => {
         useCase.execute()
      }).not.toThrow()
   })

   it("outputs no bikes to the presenter for an empty storage", () => {
      const useCase = new SeeBikes(emptyBikeStorage, ui)

      useCase.execute()

      expect(ui.showBikes).toHaveBeenCalled()
      expect(ui.showBikes).toHaveBeenCalledWith([])
   })

   it("outputs bikes to the presenter", () => {
      const useCase = new SeeBikes(bikeStorage, ui)

      useCase.execute()

      expect(ui.showBikes).toHaveBeenCalled()
      expect(ui.showBikes).toHaveBeenCalledWith([{name: "Bike", price: 1000, description: "nice Bike" }])
   })

})