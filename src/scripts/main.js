'use strict';

const inputMap = [...document.querySelectorAll('.field-text')];

inputMap.forEach((input) => {
  if (!input.id) {
    input.id = input.name;
  }

  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);

  const formattedText = input.name
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase());

  label.textContent = formattedText;

  input.setAttribute('placeholder', formattedText);

  input.parentElement.insertBefore(label, input);
});
