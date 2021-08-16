'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const nameFormatted = input.name.replace(/[A-Z]/g, char => ` ${char}`);

  input.placeholder = nameFormatted[0].toUpperCase()
  + nameFormatted.slice(1);

  const newLabel = document.createElement('label');

  newLabel.className = 'field-label';
  newLabel.setAttribute('for', input.id);
  newLabel.textContent = nameFormatted.toUpperCase();
  input.parentElement.append(newLabel);
});
