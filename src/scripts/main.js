'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');
  let placeholder = input.name
    .split(/(?=[A-Z])/)
    .map(str => str.toLowerCase())
    .join(' ');

  placeholder = placeholder.charAt(0).toUpperCase() + placeholder.slice(1);
  label.setAttribute('for', input.id);
  label.classList.add('field-label');
  label.innerHTML = placeholder;

  input.before(label);
  input.setAttribute('placeholder', placeholder);
}
