"use strict";

// Находим элементы на странице
const btnMinus = document.querySelectorAll('[data-action="minus"]');
const btnPlus = document.querySelectorAll('[data-action="plus"]');
const counter = document.querySelectorAll("[data-counter]");

// Клик по кнопке (-)
for (let minus of btnMinus) {
  for(let count of counter) {
    minus.addEventListener("click", function () {
      if (+count.innerText > 1) {
        count.innerText = --count.innerText;
      } else return;
    })
  }
}

// Клик по кнопке (+)
for (let plus of btnPlus) {
  for (let count of counter) {
    plus.addEventListener("click", function () {
      count.innerText = ++count.innerText;
    })
  } 
}
