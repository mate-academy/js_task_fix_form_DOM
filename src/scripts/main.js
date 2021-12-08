'use strict';

// write code here

const fields = document.querySelectorAll('.field');

for (const field of fields) {
  const input = field.querySelector('.field-text');

  input.placeholder = input.name;

  input.placeholder = input.placeholder.charAt(0).toUpperCase()
  + input.placeholder.slice(1);

  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name;

  field.append(label);
}
