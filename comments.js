'use strict';

(function () {
    // получаем случайный индекс массива
    const getIndex = function (arr) {
        return Math.floor(Math.random() * arr.length);
    }

    let forms = document.querySelector('.forms');
    let commentField = document.querySelector('.comment-field');

    let photoUsers = ['/img/ava-petrov.png', '/img/ava-ksenya.png', '/img/ava-ivanov.png'];
    let commentsList = document.querySelector('.comments__list');
    let commentTemplate = document.querySelector('template').content.querySelector('li');
    let commentInputName = document.querySelector('.form-name');
    let commentInputEmail = document.querySelector('.form-email');



    // создание нового комментария из шаблона
    forms.onsubmit = function (evt) {
        evt.preventDefault();

        let commentItem = commentTemplate.cloneNode(true);

        commentItem.querySelector('.photo-user').src = photoUsers[getIndex(photoUsers)];
        commentItem.querySelector('.user-name').textContent = commentInputName.value;
        commentItem.querySelector('.comment-text').textContent = commentField.value;
        
        commentsList.append(commentItem);

        commentField.value = "";
        commentInputName.value = "";
        commentInputEmail.value = "";
}
})();



