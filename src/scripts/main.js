/* eslint-disable function-paren-newline */
'use strict';

const reg = /N/g;

const divFields = [...document.querySelectorAll('.field')];
const inputs = divFields.flatMap((elem) =>
  Array.from(elem.querySelectorAll('input')),
);

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);

  const inputName = input.name.replace(reg, ' N');

  label.textContent = inputName;

  const placeholderText = `${inputName.charAt(0).toUpperCase()}${inputName.slice(1)}`;

  input.setAttribute('placeholder', placeholderText);

  input.parentNode.insertBefore(label, input);
});
