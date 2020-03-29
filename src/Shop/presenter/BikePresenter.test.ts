import { BikePresenter } from "./BikePresenter"
import { SeeBikesOutput } from "../use-cases/SeeBikesOutput"

describe("Bike presenter", () => {

   it("can present an empty view model for an empty bike storage", () => {
      //given
      const sut = new BikePresenter()

      const useCaseOutput: SeeBikesOutput = [
         {name: "Bike1", price: 1337, description: "Description 1"}
      ]

      const expectedViewModel = [
         {name: "Bike1", price: "1.337,00 €", description: "Description 1"}
      ]

      //when
      const viewModel = sut.showBikes(useCaseOutput)

      //then
      expect(viewModel).toStrictEqual(expectedViewModel)
   })
})