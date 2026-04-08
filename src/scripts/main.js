'use strict';

const inputs = document.querySelectorAll('input');

const camelToTitleCase = (string) => {
  return string
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase());
};

const camelToPlaceholder = (string) => {
  return string
    .replace(/([A-Z])/g, ' $1')
    .toLowerCase()
    .replace(/^(\w)/, (char) => char.toUpperCase());
};

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  if (input.id) {
    label.setAttribute('for', input.id);
  }

  const labelText = camelToTitleCase(input.name);
  const placeholderText = camelToPlaceholder(input.name);

  label.textContent = labelText;
  input.setAttribute('placeholder', placeholderText);

  input.parentNode.insertBefore(label, input);
});
