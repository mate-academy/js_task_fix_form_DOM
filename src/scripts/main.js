/* eslint-disable no-shadow */
'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;

  const formattedName = formatLabel(input.name);

  label.textContent = formattedName;
  input.placeholder = formattedName;

  input.parentNode.insertBefore(label, input);
});

function formatLabel(name) {
  return name
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/^./, (str) => str.toUpperCase());
}
