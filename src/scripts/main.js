'use strict';

const allInputs = document.querySelectorAll('input');

function strFormat(str) {
  let capitalize = str.charAt(0).toUpperCase() + str.slice(1);

  capitalize = capitalize.replace(/([A-Z])/g, ' $1').trim();

  return capitalize;
}

function addLableForInputs(inputs) {
  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.className = 'field-label';
    label.htmlFor = input.id;
    label.textContent = strFormat(input.name);

    input.placeholder = strFormat(input.name);
    input.parentNode.insertBefore(label, input);
  });
}

addLableForInputs(allInputs);
