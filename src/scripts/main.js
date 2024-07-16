'use strict';

const inputElements = document.querySelectorAll('input');

function addLableForInputs(inputs) {
  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.className = 'field-label';
    label.htmlFor = input.id;

    const getName = input.name;
    let formatedName = '';

    for (let i = 0; i < getName.length; i++) {
      if (getName[i] === getName[i].toUpperCase() && i !== 0) {
        formatedName += ' ';
      }

      formatedName += getName[i];
    }

    label.textContent = formatedName.trim();

    input.placeholder = `${input.name[0].toUpperCase()}${input.name.slice(1)}`;
    input.parentNode.insertBefore(label, input);
  });
}

addLableForInputs(inputElements);
