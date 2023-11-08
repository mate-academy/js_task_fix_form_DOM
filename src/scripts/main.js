'use strict';

const inputs = document.querySelectorAll('.field-text');

function firstUp(str) {
  if (!str) {
    return str;
  }

  let result = str[0].toUpperCase() + str.slice(1);

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      result = result.slice(0, i) + ' ' + result.slice(i);
    }
  }

  return result;
}

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = firstUp(input.name);
  label.htmlFor = input.id;
  input.after(label);
  input.placeholder = firstUp(input.name);
}
