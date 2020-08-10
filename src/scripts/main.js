'use strict';

const list = document.querySelectorAll('input');

for (const key of list) {
  const label = document.createElement('label');

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', key.id);
  key.placeholder = key.name.charAt().toUpperCase() + key.name.slice(1);
  label.textContent = key.name;
  key.after(label);
};
