'use strict';

// write code here
const inputs = document.querySelectorAll('input');

function initForm(elems) {
  for (const input of elems) {
    const label = document.createElement('label');
    const field = input.parentElement;
    const inputName = input.name.split(/(?=[A-Z])/).join(' ');

    input.placeholder = inputName[0].toUpperCase() + inputName.slice(1);

    label.className = 'field-label';
    label.setAttribute('for', input.id);
    label.textContent = inputName;

    field.prepend(label);
  }
}

initForm(inputs);
