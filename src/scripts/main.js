'use strict';

const inputs = document.querySelectorAll('form input');

function capitalize(someText) {
  const newString = someText.split('');

  newString[0] = newString[0].toUpperCase();

  return newString.join('').replace(/([A-Z])/g, ' $1').trim();
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
