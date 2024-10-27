'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const newLabel = document.createElement('label');

  const trueName = `${input.name.slice(0, 1).toUpperCase()}${input.name.slice(1)}`;

  newLabel.classList.add('field-label');
  newLabel.setAttribute('for', input.id);
  newLabel.textContent = trueName.replace(/([A-Z])/g, ' $1').trim();

  input.before(newLabel);
  input.placeholder = trueName.replace(/([A-Z])/g, ' $1').trim();
});
