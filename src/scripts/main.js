'use strict';

const input = document.querySelectorAll('input');

for (const elem of input) {
  elem.placeholder = elem.name.replace(/([A-Z])/, ` $1`).toLowerCase();

  elem.placeholder = elem.placeholder[0].toUpperCase()
  + elem.placeholder.slice(1);

  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = elem.name;
  label.setAttribute('for', elem.id);

  elem.parentElement.append(label);
}
