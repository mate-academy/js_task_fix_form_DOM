'use strict';

// write code here
const inputs = [...document.querySelectorAll('form input')];
const formatFromCamelCase = (string) => {
  return string.replace(/([A-Z])/g, ' $1').charAt(0).toUpperCase()
  + string.replace(/([A-Z])/g, ' $1').toLowerCase().slice(1); ;
};

inputs.forEach(input => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = formatFromCamelCase(input.name);
  input.parentElement.append(label);
  input.placeholder = formatFromCamelCase(input.name);
});
