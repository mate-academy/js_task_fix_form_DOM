'use strict';

const inputs = document.querySelectorAll('input');

function createLabelElement(input) {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.getAttribute('id'));
  label.setAttribute('id', input.getAttribute('name'));
  label.setAttribute('placeholder', input.getAttribute('name'));
  label.textContent = input.getAttribute('name');

  const parentContainer = input.parentElement;

  parentContainer.prepend(label);
}

for (const input of inputs) {
  createLabelElement(input);

  const placeholderValue = input.getAttribute('name');

  const capitalizeValue =
    placeholderValue.charAt(0).toUpperCase() +
    placeholderValue.slice(1).toLowerCase();

  input.setAttribute('placeholder', capitalizeValue);
}
