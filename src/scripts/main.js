'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name;

  input.placeholder = capitalize(input.name);

  input.before(label);
}

function capitalize(text) {
  const arr = text.split('');

  return arr.map((el, i) =>
    i === 0
      ? el[i].toUpperCase()
      : el).join('');
}
