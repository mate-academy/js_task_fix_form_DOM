'use strict';

const inputs = document.querySelectorAll('form input');

function formatName(value) {
  return value.split(/(?=[A-Z])/).join(' ');
}

inputs.forEach((input) => {
  const inputName = formatName(input.name);
  const inputId = input.id;

  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', inputId);
  label.textContent = inputName;

  input.placeholder = inputName.charAt(0).toUpperCase() + inputName.slice(1);

  input.parentNode.append(label);
});
