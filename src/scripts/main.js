'use strict';

const inputElements = document.querySelectorAll('input');

function addLableForInput(inputs) {
  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.className = 'field-label';
    label.htmlFor = input.id;
    label.textContent = input.name;

    input.placeholder = `${input.name[0].toUpperCase()}${input.name.slice(1)}`;
    input.parentNode.insertBefore(label, input);
  });
}

addLableForInput(inputElements);
