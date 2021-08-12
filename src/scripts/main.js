'use strict';

const input = document.querySelectorAll('input');

[ ...input ].forEach(element => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = element.id;
  label.textContent = element.name;
  element.after(label);

  element.placeholder = element.name[0].toUpperCase() + element.name.slice(1);
});
