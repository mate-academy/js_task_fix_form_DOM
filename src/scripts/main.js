'use strict';

// write code here

const inputs = document.querySelectorAll('input');

document.addEventListener('DOMContentLoaded', () => {
  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.classList.add('field-label');
    label.setAttribute('for', input.id);
    label.textContent = input.name;

    input.placeholder =
      input.name.charAt(0).toUpperCase() + input.name.slice(1);
    input.parentNode.insertBefore(label, input);
  });
});
