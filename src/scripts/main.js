'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name.split(/(?=[A-Z])/).join(' ');
  input.parentElement.append(label);

  input.placeholder = input.name.split(/(?=[A-Z])/)
    .map(el => el[0].toUpperCase() + el.slice(1))
    .join(' ');
});
