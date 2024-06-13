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

    const formattedName = inputName.replace(/([a-z])([A-Z])/g, '$1 $2');

    label.textContent =
      formattedName.charAt(0).toUpperCase() + formattedName.slice(1);

    input.parentNode.insertBefore(label, input);

    input.placeholder =
      formattedName.charAt(0).toUpperCase() + formattedName.slice(1);
  });
});
