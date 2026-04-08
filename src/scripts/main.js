'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const form = [...document.querySelectorAll('input')];

  form.map((input) => {
    const inputName = input.getAttribute('name');
    const capitalizedName =
      inputName.charAt(0).toUpperCase() + inputName.slice(1);

    input.setAttribute('placeholder', capitalizedName);

    const id = input.getAttribute('id');
    const label = document.createElement('label');

    label.setAttribute('for', id);
    label.setAttribute('class', 'field-label');
    label.textContent = inputName;

    input.insertAdjacentElement('beforebegin', label);
  });
});
