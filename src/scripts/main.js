'use strict';

const inputs = document.querySelectorAll('input');

[...inputs].forEach((input) => {
  const label = document.createElement('label');

  input.parentElement.append(label);

  let inputName = '';

  for (const char of input.name) {
    if (char.toUpperCase() === char) {
      inputName += ' ';
    }
    inputName += char;
  }

  const inputNameSlice = inputName.slice(0, 1).toUpperCase()
+ inputName.slice(1);

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = inputNameSlice;
  input.setAttribute('placeholder', inputNameSlice);
});
