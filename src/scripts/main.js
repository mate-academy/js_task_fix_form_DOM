'use strict';

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const inputName = input.name;

    const label = document.createElement('label');

    label.className = 'field-label';
    label.htmlFor = input.id;

    label.textContent = inputName.charAt(0).toUpperCase() + inputName.slice(1);

    input.placeholder = label.textContent;

    input.parentNode.insertBefore(label, input);
  });
});
