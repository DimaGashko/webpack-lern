import { split } from 'lodash';
import * as process from "process";
   
class Test {
   private a: number = 5;
   private b: string = 'asdf';

   constructor() { 
      console.log(this.a, this.b);
   } 

   public hi() { 
      console.log(split('asdjf asdkasdf sdahfl', ' a'));
   }
}

new Test();
new Test();
new Test();
new Test();
new Test();

if (process.env.isDevelopment) {
   console.log('Welcome to production');
 }