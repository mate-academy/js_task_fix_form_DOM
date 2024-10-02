'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((elementOfInput) => {
  const labels = document.createElement('label');

  labels.className = 'field-label';
  labels.htmlFor = elementOfInput.id;
  labels.textContent = elementOfInput.name;

  elementOfInput.placeholder =
    elementOfInput.name.charAt(0).toUpperCase() + elementOfInput.name.slice(1);
  elementOfInput.parentElement.appendChild(labels);
});
