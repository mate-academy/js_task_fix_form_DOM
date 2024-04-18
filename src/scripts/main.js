'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const id = input.getAttribute('id');
  const label = document.createElement('label');

  label.setAttribute('for', id);
  label.classList.add('field-label');
  label.textContent = capitalizeString(input.getAttribute('name'));

  const placeholderText = capitalizeString(input.getAttribute('name'));

  input.setAttribute('placeholder', placeholderText);

  const parentForInput = input.parentNode;

  parentForInput.insertBefore(label, input);
});

function capitalizeString(str) {
  const capitalizeStr = str.split('').reduce((acc, char, index) => {
    if (index === 0) {
      return acc + char.toUpperCase();
    }

    if (char === char.toUpperCase()) {
      return acc + ` ${char}`;
    }

    return acc + char;
  }, '');

  return capitalizeStr;
}
