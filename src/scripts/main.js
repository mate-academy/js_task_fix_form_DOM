'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const placeholderName = input.name.replace(/[A-Z]/g, ' ' + '$&');
  const label = document.createElement('label');

  input.setAttribute(
    'placeholder',
    `${placeholderName[0].toUpperCase() + placeholderName.slice(1)}`
  );

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = `${placeholderName}`;

  input.before(label);
}
