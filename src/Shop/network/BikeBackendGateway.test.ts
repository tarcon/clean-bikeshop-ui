import { BikeBackendGateway } from "./BikeBackendGateway"

describe("BikeBackendGateway", () => {

   it("can fetch bikes ", async () => {
      const gateway = new BikeBackendGateway()

      expect(async () => {
         await gateway.fetchPurchasableBikes()
      }).not.toThrow()
   })

})