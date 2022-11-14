'use strict';

const inputs = document.querySelectorAll('.field-text');

inputs.forEach(input => {
  const inputName = input.getAttribute('name');

  let placeholderValue = '';

  for (let i = 0; i < inputName.length; i++) {
    if (inputName[i] === inputName[i].toUpperCase()) {
      placeholderValue += ' ';
    }

    placeholderValue += inputName[i];
  }

  const newPlaceholderValue = placeholderValue[0].toUpperCase()
  + placeholderValue.slice(1);

  input.setAttribute('placeholder', newPlaceholderValue);

  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.getAttribute('id'));
  label.textContent = newPlaceholderValue;
  input.parentElement.prepend(label);
});
