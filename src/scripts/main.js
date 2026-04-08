'use strict';

const inputs = Array.from(
  document.querySelector('.login-wrap').querySelectorAll('input'),
);

inputs.forEach((input) => {
  const labelElement = document.createElement('label');

  labelElement.setAttribute('for', input.id);

  const inputName =
    input.name.charAt(0).toUpperCase() + input.name.slice(1).toLowerCase();

  labelElement.textContent = inputName;
  labelElement.classList.add('field-label');

  input.parentNode.insertBefore(labelElement, input);

  input.setAttribute('placeholder', inputName);
});
