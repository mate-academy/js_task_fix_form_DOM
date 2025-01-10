'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    const inputs = form.querySelectorAll('input');

    inputs.forEach((input) => {
      const fieldName = input.getAttribute('name');

      if (!fieldName) {
        return;
      }

      const label = document.createElement('label');

      label.className = 'field-label';
      label.setAttribute('for', input.id);
      label.textContent = fieldName;

      const placeholderText =
        fieldName.charAt(0).toUpperCase() + fieldName.slice(1);

      input.setAttribute('placeholder', placeholderText);

      input.parentElement.insertBefore(label, input);
    });
  });
});
