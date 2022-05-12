'use strict';

const inputs = document.querySelectorAll('input');

for (let i = 0; i < inputs.length; i++) {
  const labelElement = document.createElement('label');
  const inputName = inputs[i].name.split(/(?=[A-Z])/).join(' ');

  labelElement.className = 'field-label';
  labelElement.for = inputs[i].id;
  labelElement.textContent = inputName;

  inputs[i].placeholder = inputName[0].toUpperCase() + inputName.slice(1);
  inputs[i].parentElement.append(labelElement);
}
