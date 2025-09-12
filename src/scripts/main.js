'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const imputs = document.querySelectorAll('form input');

  for (const input of imputs) {
    const label = document.createElement('label');

    label.classList.add('field-label');
    label.setAttribute('for', input.id);

    label.textContent = input.name;

    input.placeholder =
      input.name.charAt(0).toUpperCase() + input.name.slice(1);

    input.parentElement.appendChild(label);
  }
});
