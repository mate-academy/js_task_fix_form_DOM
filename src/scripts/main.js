'use strict';

// eslint-disable-next-line no-unused-vars
const formInputs = document.querySelectorAll('form input');

// eslint-disable-next-line no-unused-vars
const formatName = (text) =>
  text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

formInputs.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = formatName(input.name);
  input.setAttribute('placeholder', formatName(input.name));
  input.parentElement.appendChild(label);
});
