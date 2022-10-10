'use strict';

const inputs = document.querySelectorAll('input');

for (const input of [...inputs]) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.innerText = input.name;
  input.parentElement.append(label);
  input.placeholder = capitalize(input.name);
};

function capitalize(string) {
  return string.slice(0, 1).toUpperCase()
  + string.slice(1).split(/(?=[A-Z])/g).join(' ');
};
