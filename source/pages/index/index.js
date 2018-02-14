import './index.sass';
import '../base.sass';

import getMenu from '../../components/menu/menu';

var els = {
   nav: document.querySelector('.nav'),
}

var menu = getMenu(
   ['Item 1', 'Item 2', 'Item 3'], 
   'page-menu'
);

els.nav.innerHTML = menu;
console.log('It is index');