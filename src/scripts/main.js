'use strict';

const inputList = [...document.querySelectorAll('input')];

for (const field of inputList) {
  const label = document.createElement('label');

  field.placeholder = field.name.toUpperCase();
  field.insertAdjacentElement('beforebegin', label);

  label.htmlFor = field.id;
  label.className = 'field-label';
  label.innerText = field.placeholder;
}
