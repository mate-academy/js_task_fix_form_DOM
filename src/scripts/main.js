'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  input.setAttribute('placeholder', capitalize(input.getAttribute('name')));

  const label = document.createElement('label');

  label.className = 'field-label';

  label.setAttribute('for', input.getAttribute('id'));

  label.innerHTML = input.getAttribute('name');

  input.before(label);
}

function capitalize(text) {
  return text[0].toUpperCase() + text.slice(1);
}
