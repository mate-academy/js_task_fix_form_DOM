'use strict';

const inputs = document.querySelectorAll('input');

for (const field of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = field.id;
  label.textContent = field.name;

  field.placeholder = field.name[0].toUpperCase() + field.name.slice(1);
  field.after(label);
}
