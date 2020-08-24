'use strict';

const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.getAttribute('id'));
  label.textContent = input.getAttribute('name');
  input.prepend('label');

  const valueOfplh = input.name[0].toUpperCase()
    + input.name.slice(1).replace(/([A-Z])/g, ' $1').toLowerCase();

  input.placeholder = valueOfplh;
  input.parentElement.append(label);
}
