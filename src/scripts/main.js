'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input, index) => {
  if (!input.id) {
    input.id = `${input.name || 'input'}-${index}`;
  }

  const parentElement = input.parentElement;
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);

  const readableName = input.name.replace(/([A-Z])/g, ' $1').trim();
  const capitalizedName =
    readableName.charAt(0).toUpperCase() + readableName.slice(1);

  label.textContent = capitalizedName;
  input.placeholder = capitalizedName;
  parentElement.prepend(label);
});
