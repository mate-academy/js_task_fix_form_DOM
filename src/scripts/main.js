'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('form input');

  inputs.forEach(input => {
    const label = document.createElement('label');
    label.className = 'field-label';

    if (!input.id) {
      input.id = input.name;
    }

    label.setAttribute('for', input.id);
    label.textContent = input.name.toUpperCase();

    input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);

    input.parentElement.insertBefore(label, input);
  });
});
