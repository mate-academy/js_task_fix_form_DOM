'use strict';

const inputs = document.querySelectorAll('input');

[...inputs].forEach(input => {
  const parentDiv = input.closest('div');
  const label = document.createElement('label');

  label.name = input.name;
  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name.toUpperCase();

  parentDiv.prepend(label);
  input.placeholder = capitalize(input.name);
});

function capitalize(line) {
  return `${line.charAt(0).toUpperCase()}${line.substring(1).toLowerCase()}`;
}
