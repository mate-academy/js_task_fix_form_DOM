'use strict';

const formInputs = document.querySelectorAll('input');

formInputs.forEach((input) => {
  const label = document.createElement('label');

  label.setAttribute('for', input.id);

  const labelText = input.name
    .split(/(?=[A-Z])/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  label.textContent = labelText;

  label.classList.add('field-label');

  input.placeholder = labelText;

  input.parentNode.insertBefore(label, input);
});
