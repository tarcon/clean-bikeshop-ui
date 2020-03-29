import { BikePresenter } from "./BikePresenter"

describe("Bike presenter", () => {
   it("generates empty view model for an empty store", () => {
      //given
      const sut = new BikePresenter()

      //when
      const viewModel = sut.showBikes([])

      //then
      expect(viewModel).toStrictEqual([])
   })

   it("generates a view model for a bike", () => {
      //given
      const sut = new BikePresenter()

      //when
      const viewModel = sut.showBikes([
         { name: "Bike1", price: 1337, description: "Description 1" },
      ])

      //then
      expect(viewModel).toStrictEqual([
         { name: "Bike1", price: "1.337,00 €", description: "Description 1" },
      ])
   })
})
