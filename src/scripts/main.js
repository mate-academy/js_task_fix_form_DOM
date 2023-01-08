'use strict';

// variables
const inputs = document.querySelectorAll('.field-text');

//  function for formating camelCase
function fixCamelCase(str) {
  const formatedStr = str.replace(/(\B[A-Z])/g, ' $1').toLowerCase();

  return formatedStr[0].toUpperCase() + formatedStr.slice(1);
}

//  add placeholders and labels for inputs
[...inputs].forEach(
  (input) => {
    const inputName = fixCamelCase(input.name);
    const label = document.createElement('label');

    input.placeholder = inputName;
    label.className = 'field-label';
    label.textContent = inputName;
    label.htmlFor = `${input.id}`;
    input.parentElement.prepend(label);
  }
);
