'use strict';

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    if (!input.id) {
      input.id = input.name;
    }

    const label = document.createElement('label');

    label.classList.add('field-label');

    label.htmlFor = input.id;

    const text = input.name[0].toUpperCase() + input.name.slice(1);

    label.textContent = text;
    input.placeholder = text;

    input.parentElement.insertBefore(label, input);
  });
});
