import { BikePresenter } from "./BikePresenter"

describe("Bike presenter", () => {
   it("generates empty view model for an empty store", () => {
      //given
      const testRenderFn = jest.fn()
      const sut = new BikePresenter(testRenderFn)

      //when
      sut.showBikes([])

      //then
      expect(testRenderFn).toHaveBeenCalledWith([])
   })

   it("generates a view model for a bike", () => {
      //given
      const testRenderFn = jest.fn()
      const sut = new BikePresenter(testRenderFn)

      //when
      sut.showBikes([
         { name: "Bike1", price: 1337, description: "Description 1" },
      ])

      //then
      expect(testRenderFn).toHaveBeenCalledWith([
         { name: "Bike1", price: "1.337,00 €", description: "Description 1" },
      ])
   })
})
