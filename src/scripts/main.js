'use strict';

const inputs = document.querySelectorAll('input');

function fixForm(inputs) {
  inputs.forEach(input => {
    const label = document.createElement('label');

    label.textContent = input.name;
    label.setAttribute('for', input.id);
    input.placeholder = input.name;

    input.insertAdjacentElement('beforebegin', label);
  });
}

fixForm(inputs);
