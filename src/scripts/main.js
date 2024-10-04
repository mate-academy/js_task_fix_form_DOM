'use strict';

// write code here
const inputs = document.querySelectorAll('form input');

function formatLabelText(inputName) {
  return inputName
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
}

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  label.setAttribute('for', input.id);

  const labelText = formatLabelText(input.name);

  label.textContent = labelText;

  input.placeholder = labelText;

  input.parentNode.insertBefore(label, input);
});
