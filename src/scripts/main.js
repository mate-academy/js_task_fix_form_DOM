'use strict';

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    if (!input.id) {
      input.id = input.name;
    }

    const newLabel = document.createElement('label');

    newLabel.classList.add('field-label');
    newLabel.htmlFor = input.id;

    const capitalizedName = input.name[0].toUpperCase() + input.name.slice(1);

    newLabel.textContent = capitalizedName;

    input.placeholder = capitalizedName;
    input.before(newLabel);
  });
});
