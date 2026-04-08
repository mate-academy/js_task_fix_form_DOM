'use strict';

const inputs = document.querySelectorAll('input');

[...inputs].map((input) => {
  const inputName = input.name.replace('N', ' n');
  const placeholder = inputName.slice(0, 1).toUpperCase() + inputName.slice(1);

  input.setAttribute('placeholder', placeholder);

  const label = `<label class='field-label' for='${input.id}'>${placeholder}</label>`;

  input.insertAdjacentHTML('beforebegin', label);
});
