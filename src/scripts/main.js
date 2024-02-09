'use strict';

const inputsList = document.querySelectorAll('input');

function fixInputs(list) {
  list.forEach(input => {
    const inputName = input.getAttribute('name');
    const inputId = input.getAttribute('id');
    const newName = inputName.slice(0, 1).toUpperCase() + inputName.slice(1);

    input.setAttribute('placeholder', newName);

    const label = document.createElement('label');

    label.setAttribute('for', inputId);
    label.setAttribute('class', 'field-label');
    label.textContent = inputName.toUpperCase();

    input.before(label);
  });
}

fixInputs(inputsList);
