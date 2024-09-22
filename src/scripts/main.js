'use strict';

const fields = document.querySelectorAll('.field');

function createLabelAndPlaceholder(input) {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.textContent = input.name.charAt(0).toUpperCase() + input.name.slice(1);
  label.setAttribute('for', input.id);

  input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  input.parentNode.insertBefore(label, input);
}

fields.forEach((field) => {
  const input = field.querySelector('input');

  if (input) {
    createLabelAndPlaceholder(input);
  }
});
