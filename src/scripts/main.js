'use strict';

// write code here
function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const labelElement = document.createElement('label');

  labelElement.textContent = input.name;
  labelElement.setAttribute('for', input.id);
  labelElement.setAttribute('class', 'field-label');
  input.before(labelElement);

  input.setAttribute('placeholder', capitalize(input.name));
}
