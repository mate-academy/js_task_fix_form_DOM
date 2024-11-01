'use strict';

const inputs = document.querySelectorAll('form input');
let id = 0;

for (const input of inputs) {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', id);
  label.innerText = input.name;
  input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  input.before(label);
  id++;
}
