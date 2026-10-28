'use strict';

// write code here

const inputEls = document.querySelectorAll('form input');

inputEls.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name;

  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);

  input.before(label);
});
