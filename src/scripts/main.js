'use strict';

const inputs = document.querySelectorAll('input');

[...inputs].forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.for = input.id;

  label.textContent = input.name.split(/(?=[A-Z])/).join(' ');

  input.placeholder = (input.name[0].toUpperCase() + input.name.slice(1))
    .split(/(?=[A-Z])/)
    .join(' ');
  input.parentElement.append(label);
});
