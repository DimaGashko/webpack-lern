import { split } from 'lodash';

class Test {
   private a: number = 5;
   private b: string = 'asdf';

   constructor() { 
      console.log(this.a, this.b);
      console.log(split('asdjf asdkasdf sdahfl', ' a'));
   }
}

new Test();
new Test();
new Test();
new Test();
new Test();