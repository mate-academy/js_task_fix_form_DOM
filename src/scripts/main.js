'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);

  const capName = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  label.textContent = capName;
  input.placeholder = capName;

  input.parentNode.insertBefore(label, input);
});
