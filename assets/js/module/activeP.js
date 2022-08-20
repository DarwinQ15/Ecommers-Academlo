export function activeP () {
    const activeProduct = document.querySelectorAll('.products__item')
  
    for (let i = 0; i < activeProduct.length; i++) {
      activeProduct[i].addEventListener('click', function () {
        for (let j = 0; j < activeProduct.length; j++) {
          activeProduct[j].classList.remove('active-product')
        }
        this.classList.add('active-product')
      })
    }
  }
  