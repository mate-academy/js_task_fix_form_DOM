'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.getAttribute('id');
  label.textContent = input.name;

  input.parentElement.append(label);

  input.setAttribute(
    'placeholder', `${input.name[0].toUpperCase()}${input.name.slice(1)}`
  );
}
