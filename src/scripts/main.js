'use strict';

const inputElements = document.getElementsByTagName('input');

for (let i = 0; i < inputElements.length; i++) {
  const input = inputElements[i];
  const inputId = input.getAttribute('id');
  const inputName = input.getAttribute('name');
  const label = document.createElement('label');

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', inputId);
  label.textContent = inputName;
  input.setAttribute('placeholder', capitalize(inputName));

  input.before(label);
}

function capitalize(text) {
  return text[0].toUpperCase() + text.slice(1, text.length);
}
