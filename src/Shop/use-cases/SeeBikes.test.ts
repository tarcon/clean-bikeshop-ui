import { SeeBikes } from "./SeeBikes"


describe("SeeBikes use case", () => {

   it("can be executed", () => {
      const useCase = new SeeBikes()

      expect(() => {
         useCase.execute()
      }).not.toThrow()
   })

})