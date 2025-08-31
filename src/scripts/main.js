'use strict';

const form = document.querySelector('form');

if (form) {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.className = 'field-label';

    if (!input.id) {
      input.id = input.name || Math.random().toString(36).substr(2, 9);
    }
    label.setAttribute('for', input.id);

    label.textContent = input.name
      ? input.name.charAt(0).toUpperCase() + input.name.slice(1)
      : 'Input';

    if (input.name) {
      input.placeholder =
        input.name.charAt(0).toUpperCase() + input.name.slice(1);
    }
    input.parentNode.insertBefore(label, input);
  });
}
