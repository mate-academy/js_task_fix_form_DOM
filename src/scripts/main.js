'use strict';

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const inputId = input.id;
    const inputName = input.name;

    const label = document.createElement('label');

    label.className = 'field-label';
    label.htmlFor = inputId;
    label.textContent = inputName.charAt(0).toUpperCase() + inputName.slice(1);

    input.parentNode.insertBefore(label, input);
    input.placeholder = inputName.charAt(0).toUpperCase() + inputName.slice(1);
  });
});
