'use strict';

// write code here
const allInputs = document.getElementsByTagName('input');

[...allInputs].forEach((input) => {
  const label = document.createElement('label');

  input.setAttribute('placeholder', input.name.split(/(?=[A-Z])/).join(' '));

  label.setAttribute('for', input.id);
  label.className = 'field-label';
  label.textContent = input.name.split(/(?=[A-Z])/).join(' ');
  input.parentNode.insertBefore(label, input);
});
