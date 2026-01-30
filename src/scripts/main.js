'use strict';

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

const inputs = [...document.querySelectorAll('form input')];

inputs.forEach(input => {
  const label = document.createElement('label');
  label.className = 'field-label';
  label.textContent = input.name;
  label.htmlFor = input.id;

  input.placeholder = capitalize(input.name);

  input.before(label);
});
