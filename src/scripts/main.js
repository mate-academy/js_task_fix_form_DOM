'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('form input');

  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.className = 'field-label';
    label.setAttribute('for', input.id || input.name);

    label.textContent =
      input.name.charAt(0).toUpperCase() + input.name.slice(1);

    input.placeholder =
      input.name.charAt(0).toUpperCase() + input.name.slice(1);

    input.parentNode.insertBefore(label, input);
  });
});
