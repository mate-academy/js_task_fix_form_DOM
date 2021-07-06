'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const inputLabel = document.createElement('label');

  inputLabel.className = 'field-label';
  inputLabel.setAttribute('for', input.id);
  inputLabel.textContent = input.name;

  input.parentElement.prepend(inputLabel);
}

inputs.forEach(input => {
  let placeholder = '';

  for (let i = 1; i < input.name.length; i++) {
    if (input.name[i] !== input.name[i].toLowerCase()) {
      placeholder += ' ';
    }

    placeholder += input.name[i];
  }

  input.placeholder = input.name[0].toUpperCase() + placeholder;
});
