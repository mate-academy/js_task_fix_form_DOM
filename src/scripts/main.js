'use strict';

const fields = document.querySelectorAll('.field');

for (const field of fields) {
  const input = field.querySelector('.field-text');

  input.placeholder = input.name;

  input.placeholder = input.placeholder.replace(/([A-Z])/g, ' $1');
  input.placeholder = input.placeholder.charAt(0).toUpperCase()
    + input.placeholder.substr(1);

  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name;

  field.append(label);
}
