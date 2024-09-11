'use strict';

document.querySelectorAll('form input').forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;

  label.textContent = input.name
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase());

  input.placeholder = label.textContent;

  input.before(label);
});
