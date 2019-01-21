import _ from 'lodash';
import data from './data.json';
import './style.css';
import imgSrc from './img2.png';

function component() {
   let element = document.createElement('div');
   
   console.log(data);

   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   element.classList.add('hello');

   // Add the image to our existing div.
   var myIcon = new Image();
   myIcon.src = imgSrc;

   element.appendChild(myIcon);
 
   return element;
 }
 
 document.body.appendChild(component());