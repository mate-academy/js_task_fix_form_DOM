'use strict';

const allInputs = document.querySelectorAll('input[name]');

allInputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = input.name.replace(/([A-Z])/g, ' $1');

  input.parentNode.insertBefore(label, input);

  const capitalised = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  input.setAttribute('placeholder', capitalised.replace(/([A-Z])/g, ' $1'));
});
