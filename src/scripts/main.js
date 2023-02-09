'use strict';

const inputs = document.querySelectorAll('.field-text');

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = capitalize(input.getAttribute('name'));

  input.before(label);

  input.placeholder = capitalize(input.name);
}

function capitalize(str) {
  let res = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i] !== str[i].toUpperCase()) {
      res += str[i];
    } else {
      res += ' ' + str[i];
    }
  }

  return res;
}
