'use strict';

const fields = [...document.querySelectorAll('.field')];

for (const field of fields) {
  const input = field.firstElementChild;

  input.placeholder = `${input.name.toUpperCase()}`;

  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = `${input.id}`;
  label.textContent = `${input.name.toUpperCase()}`;

  field.append(label);
}
