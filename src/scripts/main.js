'use strict';

const inputs = [...document.querySelectorAll('form input')];

inputs.forEach((input, index) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  if (!input.id) {
    input.id = `${input.name || 'field'}-${index}`;
  }

  label.htmlFor = input.id;
  label.textContent = capitalize(input.name);

  input.placeholder = capitalize(input.name);
  input.parentElement.insertBefore(label, input);
});

function capitalize(text) {
  const capitalized = text[0].toUpperCase() + text.slice(1);

  return capitalized;
}
