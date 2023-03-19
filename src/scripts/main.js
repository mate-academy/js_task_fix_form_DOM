'use strict';

for (const inputElement of document.querySelectorAll('input')) {
  const labelElement = document.createElement('label');

  labelElement.htmlFor = inputElement.id;
  labelElement.className = 'field-label';

  let inputNameUpperCase = inputElement.name.toUpperCase();

  inputNameUpperCase = inputNameUpperCase.replace('NAME', ' NAME');

  labelElement.textContent = inputNameUpperCase;
  inputElement.before(labelElement);

  inputElement.placeholder = inputNameUpperCase[0]
    + inputNameUpperCase.slice(1).toLowerCase();
}
