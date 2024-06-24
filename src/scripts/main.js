'use strict';

const inputs = document.querySelectorAll('form input');

const toTitleCase = (str) => {
  return str
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (char) => char.toUpperCase());
};

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);

  label.textContent = toTitleCase(input.name);

  input.placeholder = toTitleCase(input.name);

  input.parentNode.insertBefore(label, input);
});
