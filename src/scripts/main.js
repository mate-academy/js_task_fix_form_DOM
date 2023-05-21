'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach(input => {
  const label = document.createElement('label');

  label.setAttribute('for', input.id);
  label.textContent = input.name.replace(/([A-Z])/g, ' $1').trim();
  label.classList.add('field-label');

  input.placeholder
  = input.name.replace(/([A-Z])/g, ' $1').trim().charAt(0).toUpperCase()
  + input.name.replace(/([A-Z])/g, ' $1').trim().slice(1);

  input.parentElement.appendChild(label);
});
