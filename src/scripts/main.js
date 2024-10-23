'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-lable';
  label.setAttribute('for', input.id);

  const labelText = input.name.toUpperCase();

  label.textContent = labelText;

  input.setAttribute('placeholder', labelText);

  input.parentNode.insertBefore(label, input);
});
