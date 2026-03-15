'use strict';

const getInput = document.querySelectorAll('input');

getInput.forEach((input) => {
  const formLabel = document.createElement('label');

  formLabel.classList.add('field-label');
  formLabel.setAttribute('for', input.id);
  formLabel.textContent = input.name;
  input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);
  input.parentElement.append(formLabel);
});
