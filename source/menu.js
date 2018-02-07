export default function(arr, className) {
   return `
      <ul class="${className}">
         ${arr.map((item) => `<li style="color: ${randColor()}">${item}</li>`).join('')}
      </ul>
   `
}

function randColor() { 
   var colors = ['red', 'green', 'blue'];
   var w = Math.random();
   
   if (w < .33) return colors[0];
   else if (w < .66) return colors[1];
   
   return colors[2]; 
} 