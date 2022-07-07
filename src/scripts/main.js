'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const label = document.createElement('label');
  const inputField = input.closest('.field');
  let inputName = '';

  for (let i = 0; i < input.name.length; i++) {
    const currentLetter = input.name[i];
    const nextLetter = input.name[i + 1];

    if (i === 0) {
      inputName += currentLetter.toUpperCase();
      continue;
    }

    if (nextLetter) {
      if (nextLetter === nextLetter.toUpperCase()) {
        inputName += `${currentLetter} `;
        continue;
      }
    }

    inputName += currentLetter;
  }

  input.placeholder = inputName;

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = inputName;

  inputField.append(label);
});
