'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const parent = input.parentElement;
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name;
  parent.append(label);
}

for (const input of inputs) {
  const text = input.name.split('');

  text[0] = input.name[0].toUpperCase();
  input.placeholder = text.join('');
}
