'use strict';

const inputs = document.querySelectorAll('form input');

for (const input of inputs) {
  const container = input.parentNode;
  let cap = '';
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.htmlFor = input.id;

  cap = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  label.textContent = cap;

  input.setAttribute('placeholder', cap);

  container.appendChild(label);
}
