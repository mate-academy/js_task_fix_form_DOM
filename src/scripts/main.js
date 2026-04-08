'use strict';

const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = input.name;
  input.parentElement.insertBefore(label, input);

  const placeholderText =
    input.name.charAt(0).toUpperCase() + input.name.slice(1);

  input.setAttribute('placeholder', placeholderText);
});
