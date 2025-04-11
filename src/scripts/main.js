'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('input');

  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.setAttribute('for', input.id);

    label.textContent =
      input.name.charAt(0).toUpperCase() + input.name.slice(1);
    label.classList.add('field-label');
    input.parentNode.insertBefore(label, input);

    input.setAttribute(
      'placeholder',
      input.name.charAt(0).toUpperCase() + input.name.slice(1),
    );
  });
});
