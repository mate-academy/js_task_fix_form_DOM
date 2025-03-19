'use strict';

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.className = 'filed-label';
    label.for = input.id;
    label.textContent = `${input.name}`.toUpperCase();
    input.placeholder = `${input.name[0].toUpperCase()}${input.name.slice(1).toLowerCase()}`;
    input.parentElement.insertBefore(label, input);
  });
});
