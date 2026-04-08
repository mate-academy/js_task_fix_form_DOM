'use strict';

const inputs = Array.from(document.querySelectorAll('input'));

inputs.map((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = input.name;
  input.parentNode.insertBefore(label, input);

  const placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  input.setAttribute('placeholder', placeholder);
});
