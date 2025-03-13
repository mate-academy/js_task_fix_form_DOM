'use strict';

function addLabel(inputs) {
  inputs.forEach((input) => {
    const label = document.createElement('Label');

    label.textContent = input.name;
    label.class = 'field-label';
    label.htmlFor = input.id;

    input.parentNode.insertBefore(label, input);
  });
}

function addPlaceholder(inputs) {
  inputs.forEach((input) => {
    const placeHolder = input.name[0].toUpperCase() + input.name.slice(1);

    input.placeholder = placeHolder;
  });
}

addLabel(document.querySelectorAll('input'));
addPlaceholder(document.querySelectorAll('input'));
