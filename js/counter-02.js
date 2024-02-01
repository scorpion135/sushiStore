'use strict'
// Отслеживаем клик на странице
window.addEventListener('click', function(event) {

    let counter;

    if (event.target.dataset.action === 'minus' || event.target.dataset.action === 'plus' ) {
        // Находим обертку счетчика
        const counterWrapper = event.target.closest('.counter-wrapper')

        // Находим див с классом счетчика
        counter = counterWrapper.querySelector('[data-counter]')

    }
    // Является ли кнопка плюсом
    if (event.target.dataset.action === 'plus') {

        counter.innerText = String(+counter.innerText + 1)
        calcCardPrice()
    } 

    // Является ли кнопка минусом
    if (event.target.dataset.action === 'minus') {

        if (+counter.innerText > 1) {
            counter.innerText = String(+counter.innerText - 1)
        } else if (event.target.closest('.card-wrapper') && +counter.innerText === 1) {
            event.target.closest('.card-item').remove()

            // отображение статуса корзины
            toggleCardStatus()
            calcCardPriceAndDelivery()
        }
 
    }           

    if (event.target.hasAttribute('data-action') && event.target.closest('.card-wrapper')) {
        calcCardPriceAndDelivery()
    }
})