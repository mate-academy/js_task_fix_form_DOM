'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');
  const inputId = input.getAttribute('id');
  const inputName = input.getAttribute('name').split(/(?=[A-Z])/).join(' ');

  label.className = 'field-label';
  label.htmlFor = inputId;
  label.textContent = inputName;

  input.setAttribute('placeholder', inputName[0].toLocaleUpperCase()
    + inputName.slice(1));

  input.parentElement.append(label);
}
