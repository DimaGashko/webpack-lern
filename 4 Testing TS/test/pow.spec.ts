import pow from "../src/pow";
import { expect } from "chai";

describe("Pow", () => {

   it("5^2 => 25", () => {
      expect(pow(5, 2)).to.be.equal(25);
   });

   it("5^3 => 125", () => {
      expect(pow(5, 3)).to.be.equal(125);
   });

});