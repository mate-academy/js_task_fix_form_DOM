'use strict';

const inputs = document.querySelectorAll('input');

[...inputs].map((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name.toUpperCase();

  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);

  input.parentElement.append(label);
});
