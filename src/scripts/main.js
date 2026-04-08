'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    const inputs = form.querySelectorAll('input');

    inputs.forEach((input) => {
      const inputName = input.getAttribute('name');
      const inputId = input.getAttribute('id');

      if (!inputName || !inputId) {
        return;
      }

      const label = document.createElement('label');

      label.classList.add('field-label');
      label.setAttribute('for', inputId);

      label.textContent =
        inputName.charAt(0).toUpperCase() + inputName.slice(1);

      const inputWrapper = input.parentNode;

      inputWrapper.insertBefore(label, input);

      input.setAttribute(
        'placeholder',
        inputName.charAt(0).toUpperCase() + inputName.slice(1),
      );
    });
  });
});
