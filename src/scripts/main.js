'use strict';

const getInputs = Array.from(document.querySelectorAll('input'));

getInputs.forEach((input) => {
  const labelElement = document.createElement('label');

  labelElement.classList.add('field-label');

  if (input.name && typeof input.name === 'string' && input.name.length > 0) {
    const labelText = input.name
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (char) => char.toUpperCase());

    labelElement.textContent = labelText;
  }

  if (!input.id) {
    input.id = 'input-' + Math.random().toString(36).slice(2, 11);
  }

  labelElement.setAttribute('for', input.id);

  input.setAttribute(
    'placeholder',
    input.name
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (char) => char.toUpperCase()),
  );

  input.parentElement.insertBefore(labelElement, input);
});
