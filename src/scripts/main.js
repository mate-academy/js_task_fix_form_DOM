'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((input) => {
  const cleanName = input.name.replace(/([A-Z])/g, ' $1').toLowerCase();
  const createdLabel = document.createElement('label');

  createdLabel.classList.add('field-label');
  createdLabel.htmlFor = input.id;
  createdLabel.textContent = cleanName;
  input.placeholder = cleanName.charAt(0).toUpperCase() + cleanName.slice(1);

  input.parentElement.append(createdLabel);
});
