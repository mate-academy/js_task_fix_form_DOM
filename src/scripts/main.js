'use strict';

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const id = input.getAttribute('id');
    const inputName = input.getAttribute('name');

    const label = document.createElement('label');

    label.className = 'field-label';
    label.htmlFor = id;
    label.textContent = inputName;

    input.parentNode.insertBefore(label, input);

    input.setAttribute(
      'placeholder',
      inputName.charAt(0).toUpperCase() + inputName.slice(1).toLowerCase(),
    );
  });
});
