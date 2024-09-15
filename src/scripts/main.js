'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((inputElement) => {
  const capitalizedName =
    inputElement.name.charAt(0).toUpperCase() + inputElement.name.slice(1);

  inputElement.setAttribute('placeholder', capitalizedName);

  const label = document.createElement('label');

  label.textContent = inputElement.name;
  label.className = 'field-label';
  label.setAttribute('for', inputElement.id);
  inputElement.insertAdjacentElement('beforebegin', label);
});
