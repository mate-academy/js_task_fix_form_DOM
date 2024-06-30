'use strict';

const inputs = document.querySelectorAll('input');

function handleName(className) {
  let result = className.replace(/([A-Z])/g, ' $1');

  result = result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();

  return result;
}

inputs.forEach((input) => {
  const label = document.createElement('label');
  const inputName = handleName(input.name);

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = inputName;

  input.placeholder = inputName;
  input.parentElement.append(label);
});
