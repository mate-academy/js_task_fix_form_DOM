'use strict';

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const inputName = input.name.replace(/-/g, ' ');

    const label = document.createElement('label');

    label.classList.add('field-label');
    label.setAttribute('for', input.id);

    label.textContent = inputName.toUpperCase();

    input.placeholder =
      inputName[0].toUpperCase() + inputName.slice(1).toLowerCase();

    input.parentElement.prepend(label);
  });
});
