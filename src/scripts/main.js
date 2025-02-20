'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const inputs = document.querySelectorAll('form input');

  inputs.forEach((input) => {
    if (!input.name) {
      return;
    }

    const label = document.createElement('label');

    label.classList.add('field-label');

    if (input.id) {
      label.setAttribute('for', input.id);
    }

    label.textContent = input.name;

    input.placeholder =
      input.name.charAt(0).toUpperCase() + input.name.slice(1);

    input.parentNode.insertBefore(label, input);
  });
});
