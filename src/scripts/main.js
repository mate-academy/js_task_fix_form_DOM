'use strict';

const inputs = document.querySelectorAll('input');

[...inputs].map(input => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = input.name;

  return input.parentElement.append(label);
});

[...inputs].map(input => {
  return input.setAttribute('placeholder', capitalize(input.name));
});

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
