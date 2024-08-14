'use strict';

const inputs = document.querySelectorAll('input');

function createLabelElement(input) {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.getAttribute('id'));
  label.setAttribute('id', input.getAttribute('name'));
  label.setAttribute('placeholder', input.getAttribute('name'));

  const labelText = input.getAttribute('name').replace(/([A-Z])/g, ' $1');

  label.textContent = labelText;

  const parentContainer = input.parentElement;

  parentContainer.prepend(label);
}

function createPlaceholder(input) {
  const placeholderValue = input.getAttribute('name');
  const value = placeholderValue
    .split(/(?=[A-Z])/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  input.setAttribute('placeholder', value);
}

for (const input of inputs) {
  createLabelElement(input);
  createPlaceholder(input);
}
