'use strict';

// write code here
const inputs = [...document.querySelectorAll('input')];

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.htmlFor = input.id;

  const formattedName = input.name
    .split('')
    .map((char) => {
      if (char === char.toUpperCase()) {
        return ' ' + char;
      }

      return char;
    })
    .join('');

  label.textContent = formattedName;

  input.parentNode.insertBefore(label, input);

  input.placeholder =
    formattedName.charAt(0).toUpperCase() +
    formattedName.slice(1).toLowerCase();
});
