'use strict';

const inputs = document.querySelectorAll('.field-text');

for (const input of inputs) {
  const label = document.createElement('label');

  label.classList.add('field-label');
  input.parentElement.append(label);
  label.textContent = camelCaseSeparate(input.name);

  label.setAttribute('for', input.id);
  input.setAttribute('placeholder', getCapitalize(label.textContent));
}

function getCapitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function camelCaseSeparate(str) {
  let result = str;

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i].toUpperCase()) {
      result = str.slice(0, i) + ' ' + str.slice(i);
    }
  }

  return result.toUpperCase();
}
