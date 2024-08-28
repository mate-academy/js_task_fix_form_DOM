'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.setAttribute('class', 'field-label');

  label.textContent = `${input.name}`;

  input.setAttribute('placeholder', `${input.name}`);

  input.parentNode.insertBefore(label, input);
});
