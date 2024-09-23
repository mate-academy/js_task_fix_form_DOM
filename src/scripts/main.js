'use strict';

const fields = document.querySelectorAll('.field');

function createLabelAndPlaceholder(input) {
  const label = document.createElement('label');

  const spaceSeparatedString = input.name.replace(/([A-Z])/g, ' $1').trim();

  const capitalizedText =
    spaceSeparatedString.charAt(0).toUpperCase() +
    spaceSeparatedString.slice(1);

  label.classList.add('field-label');
  label.textContent = capitalizedText;
  label.setAttribute('for', input.id);

  input.placeholder = capitalizedText;

  input.parentNode.insertBefore(label, input);
}

fields.forEach((field) => {
  const input = field.querySelector('input');

  if (input) {
    createLabelAndPlaceholder(input);
  }
});
