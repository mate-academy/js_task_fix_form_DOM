'use strict';

function capitalizeName(string) {
  return string.split(/(?=[A-Z])/).join(' ');
}

const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = capitalizeName(input.name.toUpperCase());

  input.placeholder = capitalizeName(input.name);
  input.parentElement.append(label);
}
