'use strict';

// write code here
const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = input.name;

  let placeholder = '';

  for (const ch of input.name) {
    if (ch === ch.toLocaleUpperCase()) {
      placeholder += ' ' + ch;
    } else {
      placeholder += ch;
    }
  }

  placeholder = placeholder[0].toLocaleUpperCase() + placeholder.slice(1);

  input.setAttribute('placeholder', placeholder);

  const parentContainer = input.parentNode;

  parentContainer.appendChild(label);
});
