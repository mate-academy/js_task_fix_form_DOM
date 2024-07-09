'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((input) => {
  const InputName = input.getAttribute('name');
  const id = input.getAttribute('id');

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.textContent = InputName;
  label.setAttribute('for', id);
  input.before(label);

  input.setAttribute(
    'placeholder',
    InputName.charAt(0).toUpperCase() + InputName.slice(1),
  );
});
