'use strict'

function calcCardPriceAndDelivery() {
    const cardItems = document.querySelectorAll('.card-item')
    const deliveryCost = document.querySelector('.delivery-cost')
    const cardDelivery = document.querySelector('[data-card-delivery]')

    let totalPrice = 0;

    cardItems.forEach(item => {

        const amountEl= item.querySelector('[data-counter]')
        const priceEl= item.querySelector('.price__currency')

        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText)

        totalPrice += currentPrice

    })

    document.querySelector('.total-price').innerText = totalPrice

    // console.log(totalPrice);

    if (totalPrice > 0) {
        cardDelivery.classList.remove('none')
    } else {
        cardDelivery.classList.add('none')
    }

    if (totalPrice >= 600) {
        deliveryCost.classList.add('free')
        deliveryCost.innerText = 'Бесплатно'
    } else {
        deliveryCost.classList.remove('free')
        deliveryCost.innerText = '250 ₽'
    }

}