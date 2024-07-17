'use strict';

const inputElements = document.querySelectorAll('input');

function addLableForInputs(inputs) {
  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.className = 'field-label';
    label.htmlFor = input.id;

    const inputName = input.name;
    let formattedName = '';

    for (let i = 0; i < inputName.length; i++) {
      if (inputName[i] === inputName[i].toUpperCase() && i !== 0) {
        formattedName += ' ';
      }

      formattedName += inputName[i];
    }

    const displayFormattedName = formattedName
      .trim()
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');

    label.textContent = displayFormattedName.toUpperCase();
    input.placeholder = displayFormattedName;

    input.parentNode.insertBefore(label, input);
  });
}

addLableForInputs(inputElements);
