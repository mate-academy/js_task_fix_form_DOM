'use strict';

const allInputs = document.querySelectorAll('form input');

for (const input of allInputs) {
  const inputName = input.getAttribute('name');
  const inputId = input.getAttribute('id');
  const parentContainer = input.parentElement;

  const label = document.createElement('label');

  label.classList.add('field-label');

  if (inputId) {
    label.setAttribute('for', inputId);
  }

  label.textContent = inputName;

  input.setAttribute('placeholder', inputName);

  parentContainer.append(label);
}
