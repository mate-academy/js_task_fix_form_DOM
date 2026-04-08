'use strict';

// write code here
const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.textContent = input.name.charAt(0).toUpperCase() + input.name.slice(1);
  label.setAttribute('for', input.id);

  input.setAttribute('placeholder', label.textContent);
  input.parentElement.insertBefore(label, input);
});
