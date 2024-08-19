'use strict';

const formInputs = document.querySelectorAll('input');

formInputs.forEach((input) => {
  const label = document.createElement('label');

  label.setAttribute('for', input.id);

  const labelText = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  label.textContent = labelText;

  label.classList.add('field-label');

  input.placeholder = labelText;

  input.parentNode.insertBefore(label, input);
});
