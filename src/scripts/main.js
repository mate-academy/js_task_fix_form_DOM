'use strict';

const inputElement = document.getElementsByTagName('input');

for (let i = 0; i < inputElement.length; i++) {
  const input = inputElement[i];
  const inputId = input.getAttribute('id');
  const inputName = input.getAttribute('name');
  const label = document.createElement('label');

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', inputId);
  label.textContent = capitalize(inputName);
  input.setAttribute('placeholder', capitalize(inputName));

  input.before(label);
}

function capitalize(text) {
  const separator = text.match(/[A-Z]/g);
  const upperText = text[0].toUpperCase() + text.slice(1, text.length);

  return upperText.replace(separator, ' ' + separator);
}
