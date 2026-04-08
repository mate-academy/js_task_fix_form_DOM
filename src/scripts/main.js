'use strict';

const allInputs = document.querySelectorAll('.field-text');

allInputs.forEach((input) => {
  const formattedName = input.name
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase());
  const forElement = document.createElement('label');

  forElement.classList.add('field-label');
  forElement.setAttribute('for', input.id);
  forElement.textContent = formattedName;

  input.parentNode.insertBefore(forElement, input);
  input.setAttribute('placeholder', formattedName);
});
