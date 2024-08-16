'use strict';

const inputs = document.querySelectorAll('.field-text');

function addLabel() {
  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.classList.add('field-label');
    label.setAttribute('for', input.id);
    label.textContent = input.name;
    input.before(label);
  });
}

function addPlaceholder() {
  inputs.forEach((input) => {
    input.placeholder = input.name.replace(
      input.name[0],
      input.name[0].toUpperCase(),
    );
  });
}

addLabel();
addPlaceholder();
