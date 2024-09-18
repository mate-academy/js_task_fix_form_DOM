'use strict';

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.classList.add('field-label');

    const inputId = input.id || input.name;

    label.setAttribute('for', inputId);

    label.textContent = input.name
      ? `${input.name.charAt(0).toUpperCase() + input.name.slice(1)}`
      : 'Unnamed input';

    input.parentNode.insertBefore(label, input);

    const placeholder = input.name
      ? input.name.charAt(0).toUpperCase() + input.name.slice(1)
      : '';

    input.placeholder = placeholder;
  });
});
