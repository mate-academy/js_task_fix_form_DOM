'use strict';

const inputsList = document.querySelectorAll('form input');

inputsList.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = input.name;
  label.htmlFor = input.id;

  input.parentNode.insertBefore(label, input);

  const firstletter = input.name[0].toUpperCase();

  input.placeholder = `${firstletter}${input.name.slice(1)}`;
});
