'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach(el => {
  const label = document.createElement('label');
  let placeholder = document.createElement('placeholder');

  label.className = 'field-label';
  label.htmlFor = el.id;
  label.textContent = el.name.toUpperCase();
  placeholder = convertText(el.name);
  el.placeholder = placeholder;
  el.before(label);
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
