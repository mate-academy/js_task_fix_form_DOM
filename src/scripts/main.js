'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    const inputs = form.querySelectorAll('input');

    inputs.forEach((input) => {
      const label = document.createElement('label');

      label.classList.add('field-label');

      label.textContent = input.name;

      label.setAttribute('for', input.id);

      input.placeholder = input.name.toUpperCase();

      input.parentNode.insertBefore(label, input);
    });
  });
});
