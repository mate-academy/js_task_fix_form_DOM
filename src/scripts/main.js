'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const forms = document.querySelectorAll('form');

  forms.forEach((currentForm) => {
    const inputs = currentForm.querySelectorAll('input');

    inputs.forEach((input) => {
      const label = document.createElement('label');

      label.className = 'field-label';
      label.setAttribute('for', input.id);

      label.textContent =
        input.name.charAt(0).toUpperCase() + input.name.slice(1);

      input.setAttribute('placeholder', label.textContent);

      input.parentElement.insertBefore(label, input);
    });
  });
});
