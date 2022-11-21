'use strict';

const allInputs = [...document.body.querySelectorAll('input')];

for (const input of allInputs) {
  const labelElement = document.createElement('label');

  const inputNameCapitalized = (item) => item[0].toUpperCase() + item.slice(1);

  labelElement.className = 'field-label';
  labelElement.setAttribute('for', input.id);
  labelElement.textContent = input.name.toUpperCase();
  input.setAttribute('placeholder', inputNameCapitalized(input.name));

  input.parentElement.insertAdjacentElement('afterbegin', labelElement);
};
