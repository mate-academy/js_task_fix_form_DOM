'use strict';

// write code here
const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  const label = document.createElement('label');
  const placeholder = input.name[0].toUpperCase() + input.name.slice(1);

  label.classList.add('field-label');
  label.htmlFor = input.id;
  label.textContent = placeholder;
  input.placeholder = placeholder;
  input.before(label);
}
