'use strict';

// write code here
const allInputs = document.querySelectorAll('input');
allInputs.forEach(input => {
  const label = document.createElement('label');
  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  const inputName = input.name;
    const capitalizedName = inputName.charAt(0).toUpperCase() + inputName.slice(1);
  label.textContent = capitalizedName;
  input.setAttribute('placeholder', capitalizedName);
  const parentField = input.parentElement;
  parentField.prepend(label);
});