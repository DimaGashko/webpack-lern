import './menu.sass';

export default function(arr, className) {
   return `
      <ul class="menu ${className}">
         ${arr.map((item) => `<li class="menu__item">${item}</li>`).join('')}
      </ul>
   `
}