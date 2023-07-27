'use strict';

const inputs = document.querySelectorAll('input');

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

inputs.forEach(input => {
  const label = document.createElement('label');

  label.setAttribute('for', input.id);
  label.classList.add('field-label');
  label.textContent = capitalize(input.name);

  input.setAttribute('placeholder', capitalize(input.name));

  input.parentNode.insertBefore(label, input);
});
