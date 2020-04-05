import { DisplaysThings } from "../boundaries/DisplaysThings"
import { SeeWelcome } from "./SeeWelcome"

describe("SeeWelcome use case", () => {
   let mockUi: DisplaysThings

   it("can be executed", () => {
      const useCase = new SeeWelcome(mockUi)

      expect(() => {
         useCase.execute()
      }).not.toThrow()
   })

   beforeAll(() => {
      jest.resetAllMocks()
      mockUi = {
         showBikes: jest.fn(),
      }
   })
})