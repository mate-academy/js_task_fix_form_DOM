'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.htmlFor = input.id;
  label.innerHTML = normalizeText(input.name);

  const inputPlacaeholder
    = input.name[0].toUpperCase() + input.name.slice(1);

  input.placeholder = normalizeText(inputPlacaeholder);
  input.parentElement.prepend(label);
});

function normalizeText(input) {
  return input.replace(/([a-z])([A-Z])/g, '$1 $2');
};
