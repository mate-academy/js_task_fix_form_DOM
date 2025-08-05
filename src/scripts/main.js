'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    const inputs = form.querySelectorAll('input');

    inputs.forEach((input) => {
      const inputName = input.getAttribute('name');

      if (!inputName) {
        return;
      }

      const capitalized =
        inputName.charAt(0).toUpperCase() + inputName.slice(1);

      input.setAttribute('placeholder', capitalized);

      const label = document.createElement('label');

      label.className = 'field-label';
      label.setAttribute('for', input.id);
      label.textContent = capitalized;

      // Append label before the input
      input.parentElement.insertBefore(label, input);
    });
  });
});
