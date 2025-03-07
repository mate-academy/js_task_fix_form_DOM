'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('form input');

  inputs.forEach((input) => {
    if (input.id && input.name) {
      const label = document.createElement('label');

      label.classList.add('field-label');
      label.setAttribute('for', input.id);
      label.textContent = capitalize(input.name);

      input.placeholder = capitalize(input.name);

      input.parentNode.insertBefore(label, input);
    }
  });

  function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
});
