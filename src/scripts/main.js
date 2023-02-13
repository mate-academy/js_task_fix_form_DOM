'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.for = input.id;
  label.textContent = input.name.toUpperCase();

  input.placeholder = capitalise(input.name);
  input.after(label);
});

function capitalise(string) {
  const capitalisedString = string[0].toUpperCase() + string.slice(1);

  return capitalisedString;
}
