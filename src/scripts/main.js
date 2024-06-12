'use strict';

const inputs = [...document.querySelectorAll('input')];

// eslint-disable-next-line no-shadow
function normaliseName(name) {
  let result = '';

  for (let i = 0; i < name.length; i++) {
    const char = name[i];

    if (i === 0) {
      result += char.toUpperCase();
    } else {
      if (char === char.toUpperCase()) {
        result += ' ' + char;
      } else {
        result += char;
      }
    }
  }

  return result;
}

for (let i = 0; i < inputs.length; i++) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = normaliseName(inputs[i].name);
  label.setAttribute('for', inputs[i].id);

  inputs[i].parentElement.append(label);
  inputs[i].placeholder = normaliseName(inputs[i].name);
}
