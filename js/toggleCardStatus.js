'use strict'

function toggleCardStatus() {
    const cardWrap = document.querySelector('.card-wrapper')
    const emptyBasket = document.querySelector('[data-cart-empty]')
    const orderForm = document.querySelector('#order-form')

    if (cardWrap.children.length > 0) {

        emptyBasket.classList.add('none')
        orderForm.classList.remove('none')
        
    } else {
        
        emptyBasket.classList.remove('none')
        orderForm.classList.add('none')

    }
}


					
