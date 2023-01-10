'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach(input => {
  const label = document.createElement('label');
  let placeholder = document.createElement('placeholder');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = convertText(input.name).toUpperCase();
  placeholder = convertText(input.name);
  input.placeholder = placeholder;
  input.before(label);
});

function convertText(text) {
  let str = '';

  for (const char of text) {
    if (char === char.toUpperCase()) {
      str += ' ' + char.toLowerCase();
    } else {
      str += char;
    }
  }
  str = str.charAt(0).toUpperCase() + str.slice(1);

  return str;
}
