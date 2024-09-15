'use strict';

function cammelCaseToNormal(string) {
  let normalText = '';

  for (let i = 0; i < string.length; i++) {
    const currentChar = string.charAt(i);

    if (currentChar === currentChar.toUpperCase()) {
      normalText += ' ';
    }

    normalText += currentChar;
  }

  normalText = normalText.charAt(0).toUpperCase() + normalText.slice(1);

  return normalText;
}

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const inputName = cammelCaseToNormal(input.name);
  const label = document.createElement('label');

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', input.id);
  label.textContent = inputName;

  input.insertAdjacentElement('afterend', label);

  input.setAttribute('placeholder', inputName);
}
