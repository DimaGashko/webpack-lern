class Test {
   private a: number = 5;
   private b: string = 'asdf';

   constructor() { 
      console.log(this.a, this.b);
      throw 'sadf';
   }
}

new Test();
new Test();
new Test();
new Test();
new Test();