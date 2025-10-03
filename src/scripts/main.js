'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    const inputs = form.querySelectorAll('input');

    inputs.forEach((input) => {
      const inputName = input.name;

      const placeholder = inputName
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, (str) => str.toUpperCase());

      input.placeholder = placeholder;

      const label = document.createElement('label');

      label.className = 'field-label';
      label.setAttribute('for', input.id);
      label.textContent = placeholder.toUpperCase();

      input.parentNode.appendChild(label);
    });
  });
});
