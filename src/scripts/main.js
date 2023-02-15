'use strict';

const inputs = document.querySelectorAll('form input');

function capitalize(someText) {
  someText[0].toUpperCase();

  return someText;
}

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.innerText = input.name;
  label.textContent = input.name;
  input.placeholder = capitalize(input.name);
  input.parentElement.prepend(label);
}
