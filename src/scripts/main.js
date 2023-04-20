'use strict';

const inputs = document.querySelectorAll('input');

[...inputs].map(input => {
  const label = document.createElement('label');

  label.className = ['field-label'];
  label.htmlFor = input.id;
  label.textContent = input.name;
  input.before(label);

  input.placeholder = capitalize(input.name);
});

function capitalize(word) {
  return word.slice(0, 1).toUpperCase()
    + word.slice(1);
}
