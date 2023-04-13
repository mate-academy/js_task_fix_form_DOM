'use strict';

// write code here
const inputs = [...document.querySelectorAll('form input')];
const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

inputs.forEach(input => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = input.name;
  input.parentElement.append(label);
  input.placeholder = capitalizeFirstLetter(input.name);
});
