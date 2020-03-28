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

   it("returns an empty response model when no bikes are stored", () => {
      const useCase = new SeeBikes(emptyBikeStorage)

      const responseModel = useCase.execute()

      expect(responseModel).toStrictEqual([])
   })
   
})