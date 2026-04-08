'use strict';

const inputs = document.querySelectorAll('.field-text');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);

  const formattedName = input.name
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase());

  label.textContent = formattedName;
  input.placeholder = formattedName;
  input.before(label);
});
