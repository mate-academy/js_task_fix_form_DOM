'use strict';

// write code here
const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');
  const capitalizedInputName
    = input.name[0].toUpperCase() + input.name.slice(1).toLowerCase();
  const inputParentContainer = input.parentElement;

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = input.name.toUpperCase();
  input.placeholder = capitalizedInputName;

  inputParentContainer.prepend(label);
});
