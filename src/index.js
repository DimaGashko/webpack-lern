import _ from 'lodash';
import './style.css';
import imgSrc from './img2.png';

function component() {
   let element = document.createElement('div');
   
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   element.classList.add('hello');

   // Add the image to our existing div.
   var myIcon = new Image();
   myIcon.src = imgSrc;

   element.appendChild(myIcon);
 
   return element;
 }
 
 document.body.appendChild(component());