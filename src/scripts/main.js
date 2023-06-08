'use strict';

const inputs = document.querySelectorAll('input');

for (let i = 0; i < inputs.length; i++) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = inputs[i].id;

  const fieldName = capitalize(inputs[i].name);

  label.textContent = fieldName.toUpperCase();
  inputs[i].placeholder = fieldName;
  inputs[i].parentElement.append(label);
}

function capitalize(string) {
  const text = string.split('');

  text[0] = text[0].toUpperCase();

  for (let i = 1; i < text.length; i++) {
    if (text[i] === text[i].toUpperCase()) {
      text[i] = ` ${text[i]}`;
    }
  }

  return text.join('');
}
