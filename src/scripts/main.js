'use strict';

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    input.id =
      input.name ||
      `input-${input.name || Math.random().toString(36).slice(2)}`;

    const label = document.createElement('label');
    const base = input.name || input.id || '';

    label.classList.add('field-label');

    label.setAttribute('for', input.id);

    label.textContent = base
      ? base.charAt(0).toUpperCase() + base.slice(1)
      : '';

    input.parentElement.insertBefore(label, input);

    input.placeholder = base
      ? base.charAt(0).toUpperCase() + base.slice(1)
      : '';
  });
});
