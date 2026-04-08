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
    label.setAttribute('for', input.id);

    label.textContent =
      input.name.charAt(0).toUpperCase() + input.name.slice(1);

    input.placeholder =
      input.name.charAt(0).toUpperCase() + input.name.slice(1);

    input.parentElement.append(label);
  });
});
// write code here
