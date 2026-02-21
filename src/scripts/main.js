'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input, i) => {
  if (['submit', 'button', 'reset', 'hidden', 'image'].includes(input.type)) {
    return;
  }

  if (!input.id) {
    input.id = `${input.name || 'field'}-${i}`;
  }

  const label = document.createElement('label');

  label.setAttribute('for', input.id);
  label.classList.add('field-label');

  const labelText = (input.name || 'Field').replace(/[_-]/g, ' ').trim();

  label.textContent = labelText.replace(/\b\w/g, (c) => c.toUpperCase());

  const capitalized = labelText.replace(/\b\w/g, (c) => c.toUpperCase());

  label.textContent = capitalized;

  if (input.parentNode) {
    input.parentNode.insertBefore(label, input);
  }

  input.placeholder = capitalized;
});
