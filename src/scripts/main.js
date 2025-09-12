'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('form input');
  let counter = 0;

  for (const input of inputs) {
    if (!input.id) {
      input.id = `${input.name}-${counter}`;
      counter++;
    }

    if (document.querySelector(`label[for="${input.id}"]`)) {
      continue;
    }

    const label = document.createElement('label');

    label.classList.add('field-label');
    label.setAttribute('for', input.id);

    label.textContent = input.name;

    input.placeholder =
      input.name.charAt(0).toUpperCase() + input.name.slice(1);

    input.parentElement.appendChild(label);
  }
});
