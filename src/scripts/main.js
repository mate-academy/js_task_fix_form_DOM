'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.htmlFor = input.id;
  label.className = 'field-label';

  label.textContent = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  input.placeholder = label.textContent;

  input.parentNode.insertBefore(label, input);
});
