'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('input');

  inputs.forEach((input) => {
    const inputName = input.name;
    const cName = inputName.charAt(0).toUpperCase() + inputName.slice(1);

    const label = document.createElement('label');

    label.className = 'field-label';
    label.setAttribute('for', input.id);
    label.textContent = cName;

    input.placeholder = cName;
    input.parentNode.insertBefore(label, input);
  });
});
