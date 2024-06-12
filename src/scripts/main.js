'use strict';

const inputs = document.querySelectorAll('input');

const updateInputs = (input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('htmlFor', input.id);
  label.textContent = input.name;

  input.before(label);
  input.setAttribute('placeholder', input.name.toUpperCase());
};

inputs.forEach((item) => updateInputs(item));
