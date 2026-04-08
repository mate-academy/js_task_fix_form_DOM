'use strict';

const allInputs = document.querySelectorAll('input');

allInputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  label.setAttribute('for', input.id);

  const spacedString = input.name.replace(/([A-Z])/g, ' $1');

  label.textContent = spacedString.charAt(0).toUpperCase()
    + spacedString.slice(1);

  input.placeholder = label.textContent;

  input.before(label);
});
