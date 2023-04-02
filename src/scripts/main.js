'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = separate(input.name);

  input.placeholder = capitalize(input.name);
  input.parentElement.append(label);
};

function capitalize(str) {
  const capitalizeStr
    = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  return capitalizeStr.replace('n', ' n');
};

function separate(str) {
  let index = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i].toLowerCase()) {
      index = i;
    }
  }

  return str.slice(0, index) + ' ' + str.slice(index);
};
