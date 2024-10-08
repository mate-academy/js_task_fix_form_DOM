'use strict';

const list = [...document.querySelectorAll('input')];

const createLabel = (input) => {
  const label = document.createElement('label');

  label.textContent = input.name;
  label.className = 'field-label';
  label.setAttribute('for', input.id);
  input.insertAdjacentElement('beforebegin', label);
};

const setPlaceholder = (input) => {
  const inputName = input.name.toLowerCase();

  input.placeholder = inputName.charAt(0).toUpperCase() + inputName.slice(1);
};

for (const input of list) {
  createLabel(input);
  setPlaceholder(input);
}
