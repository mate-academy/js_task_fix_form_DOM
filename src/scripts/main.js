'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const labelElement = document.createElement('label');
  let lebelName = '';

  for (const letter of input.name) {
    if (letter.charCodeAt(0) < 97) {
      lebelName += ` ${letter}`;
    } else {
      lebelName += letter;
    }
  }

  labelElement.className = 'field-label';
  labelElement.textContent = lebelName;
  input.after(labelElement);

  const inputAtr = input.getAttribute('id');

  labelElement.setAttribute('for', inputAtr);

  const textPlaceholder = input.name.slice(0, 1).toUpperCase()
    + input.name.slice(1);

  input.setAttribute('placeholder', textPlaceholder);
}
