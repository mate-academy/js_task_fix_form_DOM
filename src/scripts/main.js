'use strict';

const inputs = [...document.querySelectorAll('input')];

function normalize(text) {
  let result = '';

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

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
  label.textContent = normalize(inputs[i].name);
  label.setAttribute('for', inputs[i].id);

  inputs[i].parentElement.append(label);
  inputs[i].placeholder = normalize(inputs[i].name);
}
