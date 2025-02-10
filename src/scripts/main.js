'use strict';

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.classList.add('field-label');
    label.setAttribute('for', input.id);

    label.textContent = input.name[0].toUpperCase() + input.name.slice(1);
    input.placeholder = label.textContent;
    input.parentNode.insertBefore(label, input);
  });
});
