export function cartMenu () {
    const cartShop = document.getElementById('cart-shop')
    const cart = document.getElementById('cart')
    const cartClose = document.getElementById('cart-close')
  
    if (cartShop) {
      cartShop.addEventListener('click', function () {
        cart.classList.toggle('show-cart')
      })
    } 
  
    if (cartClose) {
      cartClose.addEventListener('click', function () {
        cart.classList.remove('show-cart')
      })
    }
  }
  