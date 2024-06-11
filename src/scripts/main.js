'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((input) => {
  const capitalizedInputName =
    input.name[0].toUpperCase() + input.name.slice(1);

  input.placeholder = capitalizedInputName;

  const label = document.createElement('label');

  label.htmlFor = input.id;
  label.className = 'field-label';
  label.textContent = input.name;
  input.insertAdjacentElement('beforebegin', label);
});
