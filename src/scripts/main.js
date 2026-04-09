'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('form input');

  inputs.forEach((input) => {
    const container = input.parentElement;

    const label = document.createElement('label');

    label.className = 'field-label';
    label.setAttribute('for', input.id);

    const inputName = input.name;
    const capitalized = inputName.charAt(0).toUpperCase() + inputName.slice(1);

    label.textContent = capitalized;
    input.placeholder = capitalized;

    container.insertBefore(label, input);
  });
});
