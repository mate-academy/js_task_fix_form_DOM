'use strict';

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const fields = form.querySelectorAll('.field');

  fields.forEach((field) => {
    const input = field.firstElementChild;

    input.placeholder = input.name.toUpperCase();

    field.innerHTML = `
      <label for="${input.id}" class="field-label">${input.name}</label>
    `;

    field.append(input);
  });
});
