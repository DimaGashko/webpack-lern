import { file, parse } from './globals';

function component() {
   var element = document.createElement('div');

   console.log(file, parse);

   element.innerHTML = _join(['Hello', 'webpack'], ' ');

   this.alert('Hmmm, this probably isn\'t a great idea...')

   return element;
}

document.body.appendChild(component());