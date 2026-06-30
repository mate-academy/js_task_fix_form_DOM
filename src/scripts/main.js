'use strict';

// write code here
const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    if (!input.name) {
      return;
    }

    const label = document.createElement('label');

    label.classList.add('field-label');

    label.setAttribute('for', input.id);
    label.textContent = input.name || 'Field label';

    if (input.name) {
      const capitalized = input.name[0].toUpperCase() + input.name.slice(1);

      input.placeholder = capitalized;
    }
    input.parentElement.appendChild(label);
  });
});
