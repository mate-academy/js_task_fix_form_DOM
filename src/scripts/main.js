'use strict';

const inputsForm = document.querySelectorAll('.field-text');
const parentInputs = document.querySelectorAll('.field');

inputsForm.forEach((input, index) => {
  const labelForInput = document.createElement('label');

  labelForInput.className = 'field-label';
  labelForInput.htmlFor = input.id;
  labelForInput.textContent = input.name;

  parentInputs[index].append(labelForInput);

  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);
});
