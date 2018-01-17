import getMenu from './menu';

var menu = getMenu(['item 1', 'item 2', 'item 3'], 'page-menu');

document.body.innerHTML = menu;