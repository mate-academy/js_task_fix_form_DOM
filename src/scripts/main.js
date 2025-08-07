'use strict';

const inputs = document.querySelectorAll('.field-text');

[...inputs].forEach((input) => {
  const inputId = input.getAttribute('id');
  const inputName = input.getAttribute('name');

  input.insertAdjacentHTML(
    'beforebegin',
    `<label class="field-label" for="${inputId}">${inputName}</label>`,
  );

  input.setAttribute(
    'placeholder',
    inputName[0].toLocaleUpperCase() + inputName.slice(1),
  );
});
