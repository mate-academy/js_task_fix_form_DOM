'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');
  let inputName = input.getAttribute('name');

  inputName = inputName.split(/(?=[A-Z])/).map(word => (
    word.charAt(0).toUpperCase() + word.slice(1))).join(' ');

  label.classList.add('field-label');
  label.setAttribute('for', input.getAttribute('id'));
  label.textContent = inputName;

  input.setAttribute('placeholder', inputName);
  input.parentElement.append(label);
}
