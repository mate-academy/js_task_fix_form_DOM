'use strict';

[...document.querySelectorAll('form input')].map((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = input.name;

  const placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  input.placeholder = placeholder;

  input.before(label);

  return input;
});
