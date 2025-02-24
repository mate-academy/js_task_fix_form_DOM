'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('form input');

  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.classList.add('field-label');
    label.setAttribute('for', input.id);

    const formattedName = input.name.replace(/([A-Z])/g, ' $1').trim();

    label.textContent =
      formattedName.charAt(0).toUpperCase() + formattedName.slice(1);

    input.placeholder = label.textContent;

    input.parentNode.insertBefore(label, input);
  });
});
