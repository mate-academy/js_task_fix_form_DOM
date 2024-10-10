'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((elementOfInput) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = elementOfInput.id;
  label.textContent = elementOfInput.name;

  elementOfInput.placeholder =
    elementOfInput.name.charAt(0).toUpperCase() + elementOfInput.name.slice(1);
  elementOfInput.parentElement.appendChild(label);
});
