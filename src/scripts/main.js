'use strict';

// write code here
const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const { name: inputName, id } = input;

  const label = document.createElement('label');

  label.classList.add('field-label');

  label.setAttribute('for', id);

  const labelText = inputName.charAt(0).toUpperCase() + inputName.slice(1);

  label.textContent = labelText;

  input.placeholder = labelText;

  input.parentElement.prepend(label);
});
