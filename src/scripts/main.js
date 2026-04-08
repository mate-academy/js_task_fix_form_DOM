'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const inputName = input.name;

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = inputName.toUpperCase();

  input.before(label);

  input.setAttribute(
    'placeholder',
    inputName[0].toUpperCase() + inputName.slice(1),
  );
});
