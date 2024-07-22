'use strict';

document.addEventListener('DOMContentLoaded', () => {
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    const inputs = form.querySelectorAll('input');

    inputs.forEach((input) => {
      const label = document.createElement('label');

      label.className = 'field-label';
      label.setAttribute('for', input.id);

      const labelText = capitalize(
        input.name.replace(/([A-Z])/g, ' $1').trim(),
      );

      label.textContent = labelText;

      input.placeholder = capitalize(input.name);
      input.parentNode.insertBefore(label, input);
    });
  });
});
