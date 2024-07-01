'use strict';

// write code here
const allInputs = document.getElementsByTagName('input');

[...allInputs].forEach((input) => {
  const label = document.createElement('label');

  input.setAttribute('placeholder', input.name);

  label.setAttribute('for', input.id);
  label.className = 'field-label';
  label.textContent = input.name;
  input.parentNode.insertBefore(label, input);
});
