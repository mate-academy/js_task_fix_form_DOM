'use strict';

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const inputName = input.name;
    const inputId = input.id;

    const label = document.createElement('label');

    label.className = 'field-label';
    label.setAttribute('for', inputId);
    label.textContent = inputName.charAt(0).toUpperCase() + inputName.slice(1);

    input.setAttribute('placeholder', label.textContent);

    const inputParent = input.parentElement;

    inputParent.insertBefore(label, input);
  });
});
