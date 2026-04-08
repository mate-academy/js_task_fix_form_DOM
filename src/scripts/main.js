'use strict';

// write code here

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  label.setAttribute('for', input.id);

  label.textContent = input.getAttribute('name');

  input.setAttribute(
    'placeholder',
    capitalizeFirstLetter(input.getAttribute('name')),
  );

  input.parentElement.prepend(label);
});

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
