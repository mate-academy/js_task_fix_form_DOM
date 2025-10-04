'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    const inputs = form.querySelectorAll('input');

    inputs.forEach((input, index) => {
      const inputName = input.name;

      if (!inputName) {
        return;
      }

      const placeholder = inputName
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, (str) => str.toUpperCase());

      input.placeholder = placeholder;

      if (!input.id) {
        const sanitizedId =
          inputName.toLowerCase().replace(/\s+/g, '-') + '-' + index;

        input.id = sanitizedId;
      }

      const label = document.createElement('label');

      label.className = 'field-label';
      label.setAttribute('for', input.id);
      label.textContent = placeholder;
      input.parentNode.insertBefore(label, input);
    });
  });
});
