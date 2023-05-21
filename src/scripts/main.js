'use strict';

const inputs = document.querySelectorAll('.field-text');

inputs.forEach(input => {
  const newName = input.id.split('-').slice(2);
  const camelCase = newName.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  const nameInput = camelCase.join(' ');

  const placeholderInput = document.querySelector(`#${input.id}`);

  placeholderInput.setAttribute('placeholder', `${nameInput}`);

  const createLabel = document.createElement('label');

  placeholderInput.parentElement.append(createLabel);

  createLabel.className = 'field-label';
  createLabel.innerText = `${nameInput}`;
  createLabel.setAttribute('for', `${input.id}`);
});
