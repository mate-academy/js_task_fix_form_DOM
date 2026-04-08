'use strict';

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const labelElement = document.createElement('label');

    labelElement.classList.add('field-label');

    if (input.id) {
      labelElement.htmlFor = input.id;
    }

    if (input.name) {
      labelElement.textContent = input.name;
      input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);
    }
    input.before(labelElement);
  });
});
