'use strict';

const inps = document.querySelectorAll('form input');

function addLabel(inputs) {
  inputs.forEach((input) => {
    const label = document.createElement('label');
    const currentId = input.id;

    label.classList.add('field-label');
    label.htmlFor = currentId;

    if (input.name) {
      label.textContent = input.name[0].toUpperCase() + input.name.slice(1);
      input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);
    }

    input.parentElement.append(label);
  });
}

addLabel(inps);
