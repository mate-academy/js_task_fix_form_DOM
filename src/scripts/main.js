'use strict';

// write code here
const allInputs = document.querySelectorAll('input');

allInputs.forEach((input, index) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  const inputName = input.getAttribute('name');
  const labelText = inputName.charAt(0).toUpperCase() + inputName.slice(1);

  label.textContent = labelText;

  let inputId = input.getAttribute('id');

  if (!inputId) {
    inputId = `input-${index}`;
    input.setAttribute('id', inputId);
  }

  label.setAttribute('for', inputId);
  input.setAttribute('placeholder', labelText);
  input.parentNode.insertBefore(label, input);
});
