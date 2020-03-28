import { SeeBikes } from "./SeeBikes"


describe("SeeBikes use case", () => {
   let emptyBikePersistence = {
      loadAvailableBikes: jest.fn().mockReturnValue([]),
   }

   it("can be executed", () => {
      const useCase = new SeeBikes(emptyBikePersistence)

      expect(() => {
         useCase.execute()
      }).not.toThrow()
   })

})