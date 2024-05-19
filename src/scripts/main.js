'use strict';

const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', input.getAttribute('name'));

  label.textContent = input.getAttribute('name');

  const capitalizedInputName =
    input.getAttribute('name').charAt(0).toUpperCase() +
    input.getAttribute('name').slice(1);

  input.setAttribute('placeholder', capitalizedInputName);

  input.parentNode.appendChild(label);
});
