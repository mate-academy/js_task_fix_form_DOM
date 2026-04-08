'use strict';

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.classList.add('field-label');

    const fieldName = input.name;
    const capitalized = fieldName.charAt(0).toUpperCase() + fieldName.slice(1);

    label.textContent = capitalized;
    label.setAttribute('for', input.id);

    input.placeholder = capitalized;

    input.parentElement.insertBefore(label, input);
  });
});
