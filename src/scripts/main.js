'use strict';

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.classList.add('field-label');

    if (!input.id) {
      input.id = input.name;
    }

    label.setAttribute('for', input.id);

    const capitalized =
      input.name.charAt(0).toUpperCase() + input.name.slice(1);

    label.textContent = capitalized;
    input.placeholder = capitalized;

    input.parentElement.insertBefore(label, input);
  });
});
