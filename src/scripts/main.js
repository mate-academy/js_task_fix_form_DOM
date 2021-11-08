'use strict';

const inputs = document.querySelectorAll('input');

[...inputs].forEach(input => {
  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);

  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name;

  input.parentElement.append(label);
});
