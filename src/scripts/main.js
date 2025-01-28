'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  if (!input.id) {
    input.id = `input-${Math.random().toString(36).substring(2, 9)}`;
  }
  label.setAttribute('for', input.id);

  const inputName = input.name
    ? input.name.charAt(0).toUpperCase() + input.name.slice(1)
    : 'Unnamed Field';

  label.textContent = inputName;

  input.placeholder = inputName;

  input.parentNode.insertBefore(label, input);
});
