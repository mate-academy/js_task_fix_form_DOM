'use strict';

const inputs = Array.from(document.querySelectorAll('.field-text'));

inputs.forEach((input) => {
  const label = document.createElement('label');

  const inputId = input.getAttribute('id');
  const inputName = input.getAttribute('name');
  // eslint-disable-next-line
  const capitalizeInputName = inputName.charAt(0).toUpperCase() + inputName.slice(1);

  label.setAttribute('for', inputId);
  label.textContent = inputName;
  label.classList.add('field-label');

  input.setAttribute('placeholder', capitalizeInputName);

  input.parentElement.insertBefore(label, input);
});
