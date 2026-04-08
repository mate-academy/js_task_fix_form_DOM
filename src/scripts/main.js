'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = capitalizeFirstLetter(input.name);
  input.placeholder = capitalizeFirstLetter(input.name);
  input.parentElement.insertBefore(label, input);
});

function capitalizeFirstLetter(string) {
  return (string.charAt(0).toUpperCase() + string.slice(1)).replace(
    /([a-z0-9])([A-Z])/g,
    '$1 $2',
  );
}
