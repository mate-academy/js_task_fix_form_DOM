'use strict';

// write code here
const allInputs = document.querySelectorAll('input');

[...allInputs].forEach(input => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = input.name;
  input.after(label);
  input.setAttribute('placeholder', input.name);
});
