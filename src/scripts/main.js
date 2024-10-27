'use strict';

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.className = 'field-label';
    label.htmlFor = input.id;

    label.textContent =
      input.name.charAt(0).toUpperCase() + input.name.slice(1);
    input.placeholder = label.textContent;

    const fieldContainer = input.closest('.field');

    fieldContainer.insertBefore(label, input);
  });
});
