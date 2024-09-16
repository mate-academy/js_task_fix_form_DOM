'use strict';

function capitalizeName(string) {
  return string.split(/(?=[A-Z])/).join(' ');
}

const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  const correctStr = capitalizeName(input.name);
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = correctStr.toUpperCase();

  input.placeholder = correctStr.charAt(0).toUpperCase() + correctStr.slice(1);
  input.parentElement.append(label);
}
