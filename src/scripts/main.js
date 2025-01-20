'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);

  const labelText = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  label.textContent = labelText;

  input.placeholder = `Enter ${labelText}`;

  input.parentElement.insertBefore(label, input);
});
