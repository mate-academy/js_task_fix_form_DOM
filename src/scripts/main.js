'use strict';

const allInputs = document.querySelectorAll('input');

function addLableForInputs(inputs) {
  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.className = 'field-label';
    label.htmlFor = input.id;
    label.textContent = input.name;

    input.placeholder = `${input.name[0].toUpperCase()}${input.name.slice(1)}`;
    input.parentNode.insertBefore(label, input);
  });
}

addLableForInputs(allInputs);
