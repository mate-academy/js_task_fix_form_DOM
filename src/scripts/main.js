'use strict';

const inputs = document.querySelectorAll('form input');

const capitalize = (text) =>
  text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

inputs.forEach((input) => {
  const createElement = document.createElement('label');

  createElement.classList.add('field-label');
  createElement.setAttribute('for', input.name);
  createElement.textContent = capitalize(input.name);

  input.setAttribute('placeholder', capitalize(input.name));

  input.parentNode.insertBefore(createElement, input);
});
