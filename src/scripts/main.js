'use strict';

const inputs = document.querySelectorAll('input');

function inputName(className) {
  let result = className.replace(/([A-Z])/g, ' $1');

  return result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();
}

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = inputName(input.name);

  input.placeholder = inputName(input.name);
  input.parentElement.append(label);
});
