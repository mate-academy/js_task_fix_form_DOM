'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input, i) => {
  if (!input.id) {
    input.id = `${input.name || 'field'}-${i}`;
  }

  const label = document.createElement('label');

  label.setAttribute('for', input.id);
  label.classList.add('field-label');

  const labelText = (input.name || 'Field').replace(/[_-]/g, ' ').trim();

  label.textContent = labelText.replace(/\b\w/g, (c) => c.toUpperCase());

  if (input.parentNode) {
    input.parentNode.insertBefore(label, input);
  }

  input.placeholder = labelText.charAt(0).toUpperCase() + labelText.slice(1);
});
