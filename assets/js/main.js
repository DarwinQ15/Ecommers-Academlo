import { activeP} from './module/activeP.js';
import { renderC  } from './module/cart.js';
import { cartMenu } from './module/cartMenu.js';
import { darkTheme } from './module/darkTheme.js';
import { scroll } from './module/scroll.js';
import { loader } from './module/loader.js';
import { navMenu } from './module/navMenu.js';
import { renderP } from './module/products.js';
import { secActive } from './module/secActive.js';

window.addEventListener('load', function () {
  loader()
})

document.addEventListener('DOMContentLoaded', function () {
  darkTheme()
  scroll()
  navMenu()
  cartMenu()
  secActive()
  renderC()
  renderP()
  activeP()
})


