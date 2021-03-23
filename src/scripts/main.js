'use strict';

const inputs = [...document.getElementsByTagName('input')];

for (const input of inputs) {
  const label = document.createElement('label');

  label.setAttribute('for', input.id);
  label.innerText = input.name;
  label.setAttribute('class', 'field-label');
  input.placeholder = capitalizeFirstLetter(input.name);
  input.parentElement.append(label);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
