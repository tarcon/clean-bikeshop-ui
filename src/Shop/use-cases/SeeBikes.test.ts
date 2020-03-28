import { SeeBikes } from "./SeeBikes"


describe("SeeBikes use case", () => {
   let emptyBikeStorage = {
      fetchPurchasableBikes: jest.fn().mockReturnValue([]),
   }

   it("can be executed", () => {
      const useCase = new SeeBikes(emptyBikeStorage)

      expect(() => {
         useCase.execute()
      }).not.toThrow()
   })

})