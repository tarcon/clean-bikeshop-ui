import { SeeBikes } from "./SeeBikes"
import { DisplaysBikes } from "../boundaries/DisplaysBikes"
import { ProvidesBikes } from "../boundaries/ProvidesBikes"
import { Bike } from "../entities/Bike"

describe("SeeBikes use case", () => {
   let mockEmptyStorage: ProvidesBikes
   let mockStorage: ProvidesBikes
   let mockUi: DisplaysBikes

   it("can be executed", () => {
      const useCase = new SeeBikes(mockEmptyStorage, mockUi)

      expect(() => {
         useCase.execute()
      }).not.toThrow()
   })

   it("outputs no bikes to the presenter for an empty storage", () => {
      const useCase = new SeeBikes(mockEmptyStorage, mockUi)

      useCase.execute()

      expect(mockUi.showBikes).toHaveBeenCalled()
      expect(mockUi.showBikes).toHaveBeenCalledWith([])
   })

   it("outputs bikes to the presenter", async() => {
      const useCase = new SeeBikes(mockStorage, mockUi)

      await useCase.execute()

      expect(mockUi.showBikes).toHaveBeenCalled()
      expect(mockUi.showBikes).toHaveBeenCalledWith([
         { name: "Bike", price: 1000, description: "nice Bike" },
      ])
   })

   beforeAll(() => {
      jest.resetAllMocks()

      mockEmptyStorage = {
         fetchPurchasableBikes: jest.fn().mockReturnValue([]),
      }

      mockStorage = {
         fetchPurchasableBikes: jest
            .fn()
            .mockReturnValue([
               { name: "Bike", price: 1000, description: "nice Bike" } as Bike,
            ]),
      }

      mockUi = {
         showBikes: jest.fn(),
      }
   })
})
