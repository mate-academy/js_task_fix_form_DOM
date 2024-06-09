'use strict';

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const input = form.querySelectorAll('input');

  input.forEach((inputElement) => {
    const lable = document.createElement('label');

    const inputName =
      inputElement.name.slice(0, 1).toUpperCase() +
      inputElement.name.slice(1).toLowerCase();

    inputElement.insertAdjacentElement('beforebegin', lable);

    lable.classList.add('field-label');
    lable.setAttribute('for', inputElement.id);
    lable.textContent = inputElement.name;

    inputElement.setAttribute('placeholder', inputName);
  });
});
