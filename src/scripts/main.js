'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('form input');

  inputs.forEach((input) => {
    const names = input.name;

    const label = document.createElement('label');

    label.className = 'field-label';
    label.htmlFor = input.id;
    label.textContent = names.charAt(0).toUpperCase() + names.slice(1);

    input.placeholder = label.textContent;
    input.parentElement.insertBefore(label, input);
  });
});
