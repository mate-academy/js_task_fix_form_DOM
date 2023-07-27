'use strict';

const fields = document.querySelectorAll('.field');

function capitalize(str) {
  return str.charAt(0).toUpperCase() + (str.slice(1));
}

for (let i = 0; i < fields.length; i++) {
  const label = document.createElement('LABEL');

  const input = fields[i].querySelector('input');
  const inputId = input.id;
  let inputText = input.name;

  if (inputText.includes('Name')) {
    const index = inputText.indexOf('Name');

    inputText = inputText.slice(0, index) + ' ' + inputText.slice(index);
  }

  const placeholder = capitalize(inputText);

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', `${inputId}`);
  label.textContent = `${inputText}`;

  input.setAttribute('placeholder', `${placeholder}`);

  fields[i].append(label);
}
