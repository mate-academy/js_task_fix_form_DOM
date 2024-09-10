'use strict';

document.querySelectorAll('form input').forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';

  label.htmlFor = input.id;

  label.textContent = input.name[0].toUpperCase() + input.name.slice(1);

  input.placeholder = label.textContent;

  input.before(label);
});
