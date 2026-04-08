'use strict';

// write code here
const input = document.querySelectorAll('form input');

input.forEach((inputElement) => {
  if (['submit', 'reset', 'button', 'file'].includes(inputElement.type)) {
    return;
  }

  const inputName = (inputElement.getAttribute('name') || '').trim();

  if (!inputName) {
    return;
  }

  const textForLabel = inputName.charAt(0).toUpperCase() + inputName.slice(1);

  inputElement.setAttribute('placeholder', textForLabel);

  const parentElement = inputElement.parentNode || inputElement;
  let createLabel = parentElement.querySelector(
    `label.field-label[for="${CSS.escape(inputElement.id || '')}"]`,
  );

  if (!createLabel) {
    createLabel = document.createElement('label');
    createLabel.classList.add('field-label');

    if (inputElement.id) {
      createLabel.setAttribute('for', inputElement.id);
    }
    parentElement.insertBefore(createLabel, inputElement);
  }
  createLabel.textContent = inputName;
});
