'use strict';

const inputs = [...document.querySelectorAll('input')];

function capitalize(string) {
  return string.toUpperCase();
}

inputs.map((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = capitalize(input.name);

  input.parentElement.append(label);

  input.placeholder = capitalize(input.name);
});
