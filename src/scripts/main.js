'use strict';

const fields = document.querySelectorAll('input');

for (let i = 0; i < fields.length; i++) {
  const label = document.createElement('label');
  const placeHolder = fields[i].name[0].toUpperCase() + fields[i].name.slice(1);

  label.className = 'field-label';
  label.textContent = fields[i].name;
  label.htmlFor = fields[i].id;

  fields[i].placeholder = placeHolder;

  fields[i].before(label);
}
