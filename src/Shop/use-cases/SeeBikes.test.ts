import { SeeBikes } from "./SeeBikes"


describe("SeeBikes use case", () => {
   let emptyBikeStorageGateway = {
      fetchPurchasableBikes: jest.fn().mockReturnValue([]),
   }

   it("can be executed", () => {
      const useCase = new SeeBikes(emptyBikeStorageGateway)

      expect(() => {
         useCase.execute()
      }).not.toThrow()
   })

})