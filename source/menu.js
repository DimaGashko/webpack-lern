export default function(arr, className) {
   return `
      <ul class="${className}">
         ${arr.map((item) => `<li>${item}</li>`).join('')}
      </ul>
   `
}