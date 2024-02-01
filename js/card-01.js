'use strict'

const cardWrapper = document.querySelector('.card-wrapper')
// Отслеживаем клик на странице
window.addEventListener('click', function(event) {

    if(event.target.hasAttribute('data-card')) {
        const card = event.target.closest('.card')

        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        }

        const cardItemHTML = `<div class="card-item" data-id="${productInfo.id}">
                <div class="card-item__top">
                    <div class="card-item__img">
                        <img src="${productInfo.imgSrc}" alt="">
                    </div>
                    <div class="card-item__desc">
                        <div class="card-item__title">${productInfo.title}</div>
                        <div class="card-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

                        <!-- card-item__details -->
                        <div class="card-item__details">

                            <div class="items items--small counter-wrapper">
                                <div class="items__control" data-action="minus">-</div>
                                <div class="items__current" data-counter="">${productInfo.counter}</div>
                                <div class="items__control" data-action="plus">+</div>
                            </div>

                            <div class="price">
                                <div class="price__currency">${productInfo.price}</div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>`

        cardWrapper.insertAdjacentHTML('beforeend', cardItemHTML)
    }
})