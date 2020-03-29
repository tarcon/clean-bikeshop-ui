import { SeeBikes } from "./SeeBikes"
import { DisplaysThings } from "../boundaries/DisplaysThings"
import { ProvidesBikes } from "../boundaries/ProvidesBikes"


describe("SeeBikes use case", () => {
   let emptyBikeStorage = {
      fetchPurchasableBikes: jest.fn().mockReturnValue([]),
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

})