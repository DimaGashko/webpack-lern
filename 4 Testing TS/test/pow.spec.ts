import pow from "../src/pow";
import { expect } from "chai";

describe("Pow", () => {

   for (let i = 0; i < 10; i++) { 

      for (let j = 0; j < 10; j++) { 
         const res = pow(i, j);
         const expectRes = Math.pow(i, j);

         it(`${i}^${j} => ${expectRes}`, () => {
            expect(res).to.be.equal(expectRes);
         }); 

      }

   }
 
});