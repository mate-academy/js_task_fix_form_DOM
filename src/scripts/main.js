'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input, index) => {
  const label = document.createElement('label');

  const capitalizedName =
    input.name.charAt(0).toUpperCase() + input.name.slice(1);

  label.classList.add('field-label');
  label.textContent = capitalizedName;

  if (!input.id) {
    input.id = `${input.name || 'input'}-${index}`;
  }
  label.setAttribute('for', input.id);

  const placeholder = capitalizedName;

  input.setAttribute('placeholder', placeholder);

  input.parentElement.appendChild(label);
});

// write code here
