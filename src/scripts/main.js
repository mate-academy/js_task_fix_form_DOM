'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('form input');

  inputs.forEach((input) => {
    const parentElement = input.parentElement;
    const label = document.createElement('label');

    label.classList.add('field-label');
    label.setAttribute('for', input.id);

    label.textContent =
      input.name.charAt(0).toUpperCase() + input.name.slice(1);

    input.setAttribute('placeholder', label.textContent);

    parentElement.insertBefore(label, input);
  });
});
