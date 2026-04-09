'use strict';

function splitName(text) {
  const splitted = text.split(/(?=[A-Z])/).join(' ');

  return splitted[0].toLocaleUpperCase() + splitted.slice(1);
}

const inputs = [...document.querySelectorAll('form input')];

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = splitName(input.name);
  input.before(label);
  input.placeholder = splitName(input.name);
});
