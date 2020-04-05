import { WelcomePresenter } from "./WelcomePresenter"

describe("Welcome presenter", () => {
   let testRenderFn = jest.fn()

   it("generates a view model which contains the welcome string", () => {
      const sut = new WelcomePresenter(testRenderFn)

      sut.showWelcome()

      expect(testRenderFn).toHaveBeenCalledWith({
         welcomeText: expect.any(String)
      })
   })
})