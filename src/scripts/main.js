'use strict';

const inputs = document.querySelectorAll('input');

for (const key of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = key.id;
  label.textContent = key.name;
  key.placeholder = capitalizeFirstLetter(key.name);
  key.append(label);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
