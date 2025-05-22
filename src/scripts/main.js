'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const id = input.getAttribute('id');
  const inputName = input.getAttribute('name');

  if (id) {
    const label = document.createElement('label');

    label.setAttribute('for', id);
    label.classList.add('field-label');
    label.textContent = inputName;
    input.parentNode.insertBefore(label, input);
  }

  if (inputName) {
    const placeholder = inputName.charAt(0).toUpperCase() + inputName.slice(1);

    input.setAttribute('placeholder', placeholder);
  }
});
