import getMenu from './menu';

var els = {
   nav: document.querySelector('.nav'),
}

var menu = getMenu(
   ['Item 1', 'Item 2', 'Item 3'], 
   'page-menu'
);

document.body.innerHTML += menu;