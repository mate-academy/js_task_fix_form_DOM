'use strict';

const inputs = document.querySelectorAll('input');

for (const element of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = element.id;
  label.textContent = element.name;
  element.before(label);

  element.placeholder
    = element.name.charAt(0).toUpperCase()
    + element.name.slice(1);
}
