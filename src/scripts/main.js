'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('form input');

  inputs.forEach((input) => {
    if (!input.id) {
      input.id = input.name;
    }

    const label = document.createElement('label');

    label.classList.add('field-label');
    label.setAttribute('for', input.id);

    label.textContent =
      input.name.charAt(0).toUpperCase() + input.name.slice(1);

    if (input.name) {
      input.placeholder =
        input.name.charAt(0).toUpperCase() + input.name.slice(1);
    }
    input.parentElement.insertBefore(label, input);
  });
});
