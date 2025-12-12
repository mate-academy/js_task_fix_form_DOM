'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const id = input.getAttribute('id');
  const inputName = input.getAttribute('name');
  const label = document.createElement('label');

  input.before(label);
  label.classList.add('field-label');
  label.setAttribute('for', id);

  input.setAttribute('placeholder', inputName);
  label.textContent = inputName;
});
