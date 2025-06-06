'use strict';

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const { name: inputName, id, parentElement } = input;

    const label = document.createElement('label');

    label.className = 'field-label';
    label.htmlFor = id;
    label.textContent = inputName.toUpperCase();

    input.placeholder = inputName.charAt(0).toUpperCase() + inputName.slice(1);

    parentElement.insertBefore(label, input);
  });
});
