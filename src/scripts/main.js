'use strict';

// write code here
const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    if (!input.name) {
      return;
    }

    const label = document.createElement('label');

    label.classList.add('field-label');

    if (!input.id) {
      input.id = `input-${Math.random().toString(36).substring(2, 9)}`;
    }

    label.setAttribute('for', input.id);

    label.textContent =
      input.name.replace(/_/g, ' ').charAt(0).toUpperCase() +
      input.name.slice(1);

    input.parentElement.appendChild(label);

    input.placeholder =
      input.name.replace(/_/g, ' ').charAt(0).toUpperCase() +
      input.name.slice(1);
  });
});
