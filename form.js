'use strict';

(function() {
    let forms = document.querySelector('.forms');
    let commentField = document.querySelector('.comment-field');
    let submitButton = document.querySelector('.submit');
    let inputName = document.querySelector('.form-name');
    let inputEmail = document.querySelector('.form-email');

    // валидация формы
    commentField.oninput = function () {
        if (commentField.value.length <= 10 || commentField.value.length >= 200) {
            forms.classList.add('warning');
            submitButton.disabled = true;
        } else {
            forms.classList.remove('warning');
            submitButton.disabled = false;
        }
    }
    // отчиска формы
    forms.onsubmit = function (evt) {
        evt.preventDefault();

        inputName.value = "";
        inputEmail.value = "";
        commentField.value = "";
    }
})();