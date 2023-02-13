'use strict';

const fields = document.getElementsByClassName('field');

for (const field of fields) {
  const input = field.querySelector('input');
  const inputsName = input.name[0].toUpperCase() + input.name.slice(1);

  input.placeholder = inputsName;

  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = inputsName;
  label.setAttribute('for', input.id);

  field.prepend(label);
};
