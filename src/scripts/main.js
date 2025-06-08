'use strict';

const inputs = document.querySelectorAll('form input');

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

inputs.forEach((input) => {
  const parentItem = input.parentNode;
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name;
  input.placeholder = capitalize(input.name);
  parentItem.insertBefore(label, input);
});
