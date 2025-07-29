'use strict';

const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');
inputs.forEach((input, index) => {
  const label = document.createElement('label');
  label.classList.add('field-label');


  if (!input.id) {
    input.id = `input-${index}`;
  }

  label.setAttribute('for', input.id);

  const inputName = input.name || `Поле ${index + 1}`;
  label.textContent = inputName;

  const capitalizedPlaceholder = inputName.charAt(0).toUpperCase() + inputName.slice(1);
  input.setAttribute('placeholder', capitalizedPlaceholder);

  input.parentNode.insertBefore(label, input);
});



