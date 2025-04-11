'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('input');

  inputs.forEach((input) => {
    const namee = input.getAttribute('name');

    const label = document.createElement('label');

    label.className = 'field-label';
    label.setAttribute('for', input.id);
    label.textContent = namee.charAt(0).toUpperCase() + namee.slice(1);

    input.setAttribute(
      'placeholder',
      namee.charAt(0).toUpperCase() + namee.slice(1),
    );

    input.parentNode.insertBefore(label, input);
  });
});
