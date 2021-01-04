'use strict';

const arrName = document.querySelectorAll('input');

for (const key of arrName) {
  key.placeholder = key.name[0].toUpperCase() + key.name.slice(1);

  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = key.name;
  label.htmlFor = key.id;

  key.before(label);
}
