'use strict';

const inputs = document.querySelectorAll('input');

[...inputs].forEach(input => {
  // adding placeholedr
  input.placeholder = capitalizeIt(input.name);

  // creating and appending label
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = input.name;
  input.parentElement.prepend(label);
});

function capitalizeIt(text) {
  return text[0].toUpperCase() + text.slice(1);
}
