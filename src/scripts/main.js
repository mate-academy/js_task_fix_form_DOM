'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const newLabel = document.createElement('label');

  newLabel.classList.add('field-label');
  newLabel.setAttribute('for', input.id);

  const capitalizedLabel =
    input.name.charAt(0).toUpperCase() + input.name.slice(1);

  newLabel.textContent = capitalizedLabel;
  input.placeholder = capitalizedLabel;

  input.parentNode.appendChild(newLabel);
});
