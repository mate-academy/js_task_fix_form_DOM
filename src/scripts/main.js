'use strict';

const newInput = document.querySelectorAll(`.field-text`);

for (const input of newInput) {
  const label = document.createElement('label');

  label.setAttribute('class', `field-label`);
  label.setAttribute('for', input.id);
  label.textContent = input.name;

  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);

  input.parentNode.insertBefore(label, input.nextSibling);
}
