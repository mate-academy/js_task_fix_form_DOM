'use strict';

const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  const label = document.createElement('label');

  label.setAttribute('for', `${input.getAttribute('id')}`);
  label.classList.add('field-label');

  const text = input.getAttribute('name').toLowerCase();
  const idx = input.getAttribute('name').toLowerCase().indexOf('name');

  label.textContent = getLabelText(text, idx);
  input.placeholder = getPlaceholderText(text, idx);

  input.parentNode.prepend(label);
}

function getLabelText(str, idx) {
  return /name/g.test(str)
    ? `${str.slice(0, idx) + ' ' + str.slice(idx)}`
    : str;
}

function getPlaceholderText(str, idx) {
  return /name/g.test(str)
    ? `${str[0].toUpperCase() + str.slice(1, idx) + ' ' + str.slice(idx)[0].toUpperCase() + str.slice(idx + 1)}`
    : `${str[0].toUpperCase() + str.slice(1)}`;
}
