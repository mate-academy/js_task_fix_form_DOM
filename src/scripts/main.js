'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    const inputs = form.querySelectorAll('input');

    inputs.forEach((input) => {
      if (!input.id) {
        return;
      }

      const label = document.createElement('label');

      label.classList.add('field-label');
      label.setAttribute('for', input.id);

      const labelText =
        input.name.charAt(0).toUpperCase() + input.name.slice(1);

      label.textContent = labelText;

      input.placeholder = labelText;

      const parentElement = input.parentElement;

      parentElement.insertBefore(label, input);
    });
  });
});
