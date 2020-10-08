'use strict';

let articles = document.querySelectorAll('.articles__item');
let filter = document.querySelector('.articles__filter');

filter.onchange = function () {
    for (let article of articles) {
        if (article.dataset.category !== filter.value && filter.value !== 'default') {
            article.style.display = 'none';
        } else {
            article.style.display = 'block';
        }
      }
}