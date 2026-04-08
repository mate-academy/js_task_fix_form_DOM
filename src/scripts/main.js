'use strict';

// write code here
const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const inputId = input.getAttribute('id');
  const inputName = input.getAttribute('name');
  const parentInput = input.parentNode;

  const capitalizePlaceholder = (nameOfInput) => {
    return nameOfInput
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  if (inputId) {
    const inputLabel = document.createElement('label');

    inputLabel.classList.add('field-label');
    inputLabel.setAttribute('for', inputId);
    inputLabel.textContent = inputName;

    input.placeholder = capitalizePlaceholder(inputName);

    parentInput.appendChild(inputLabel);
  }
});
