'use strict';

// write code here
const allInputs = document.querySelectorAll('input');

[...allInputs].forEach(input => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);

  if (input.name === 'firstName' || input.name === 'lastName') {
    const nIdx = input.name.indexOf('N');

    input.name = input.name.substring(0, nIdx)
    + ' '
    + input.name.substring(nIdx);

    input.name = input.name.toLowerCase();
  }
  label.textContent = input.name;

  input.after(label);
  input.setAttribute('placeholder', input.name);
});
