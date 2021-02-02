'use strict';

// const { log } = console;

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('LABEL');

  label.setAttribute('for', input.id);
  label.setAttribute('class', 'field-label');
  label.textContent = input.name;

  input.insertAdjacentElement('beforebegin', label);
  input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);
}
