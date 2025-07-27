'use strict';

const inputElements = document.querySelectorAll('input');
const inputsArray = Array.from(inputElements);

inputsArray.forEach((input) => {
  const newLabel = document.createElement('label');

  newLabel.classList.add('field-label');
  newLabel.setAttribute('for', `${input.id}`);
  newLabel.textContent = `${input.name}`;

  input.setAttribute(
    'placeholder',
    `${input.name.charAt(0).toUpperCase() + input.name.slice(1)}`,
  );

  const inputParent = input.parentElement;

  inputParent.prepend(newLabel);
});
