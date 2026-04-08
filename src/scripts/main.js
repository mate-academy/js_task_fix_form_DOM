'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((input) => {
  const placeholderName = input.getAttribute('name');
  const capitalizedPlaceholder =
    placeholderName.charAt(0).toUpperCase() + placeholderName.slice(1);

  input.setAttribute('placeholder', capitalizedPlaceholder);

  const label = document.createElement('label');
  const id = input.getAttribute('id');

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', id);
  label.textContent = capitalizedPlaceholder;
  input.before(label);
});
