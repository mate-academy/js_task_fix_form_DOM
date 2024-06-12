'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((input) => {
  const formattedName = input.name.replace(/([a-z])([A-Z])/g, '$1 $2');
  const capitalizedInputName =
    formattedName[0].toUpperCase() + formattedName.slice(1);

  input.placeholder = capitalizedInputName;

  const label = document.createElement('label');

  label.htmlFor = input.id;
  label.className = 'field-label';
  label.textContent = capitalizedInputName;
  input.insertAdjacentElement('beforebegin', label);
});
