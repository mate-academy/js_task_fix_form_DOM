'use strict';

const inputs = document.getElementsByTagName('input');

for (const input of inputs) {
  input.setAttribute('placeholder', input.name);

  const label = document.createElement('label');

  label.classList.add('field-label');

  label.setAttribute('for', input.id);

  label.innerHTML = input.name.toUpperCase();

  input.before(label);
}
