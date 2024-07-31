'use strict';

const inputs = document.querySelectorAll('.field-text');

inputs.forEach((input) => {
  const inputName = `${input.getAttribute('name')}`.replace('N', ' N');
  const placeholder = inputName.replace(
    inputName[0],
    inputName[0].toUpperCase(),
  );

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', `${input.getAttribute('id')}`);
  label.textContent = `${inputName.toUpperCase()}`;

  input.setAttribute('placeholder', placeholder);
  input.before(label);
});
