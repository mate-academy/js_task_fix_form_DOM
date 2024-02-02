'use strict';

const formInputs = document.querySelectorAll('form input');

formInputs.forEach(input => {
  const label = document.createElement('label');

  label.setAttribute('for', input.id);

  label.classList.add('field-label');

  label.textContent = input.name;

  input.parentNode.insertBefore(label, input);

  input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);
});
