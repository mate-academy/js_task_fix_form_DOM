'use strict';

// write code here
const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const { name: inputName, id } = input;

  const label = document.createElement('label');

  label.classList.add('field-label');

  label.setAttribute('for', id);

  const labelText = inputName
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (char) => char.toUpperCase());

  label.textContent = labelText;

  input.placeholder = labelText;

  input.parentElement.prepend(label);
});
