'use strict';

const forms = document.querySelectorAll('form');

for (const form of forms) {
  const inputs = form.querySelectorAll('input');

  for (const input of inputs) {
    const label = document.createElement('label');

    label.setAttribute('for', input.id);
    label.textContent = input.name;
    label.className = 'field-label';
    input.before(label);
    input.setAttribute('placeholder', capitalize(input.name));
  }
}

function capitalize(string) {
  const firstLetter = string[0].toUpperCase();

  return firstLetter + string.slice(1);
}
