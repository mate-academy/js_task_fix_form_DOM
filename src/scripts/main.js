'use strict';

const inputMap = [...document.querySelectorAll('form input')];

inputMap.forEach((input) => {
  if (!input.id) {
    input.id = input.name;
  }

  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);

  const formattedText = input.name
    .replace(/-/g, ' ')
    .replace(/([A-Z])/g, ' $1')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/^./, (str) => str.toUpperCase());

  label.textContent = formattedText;

  input.setAttribute('placeholder', formattedText);

  input.parentElement.insertBefore(label, input);
});
