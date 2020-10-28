'use strict';

// write code here
const inputFields = document.getElementsByTagName('input');

for (const field of inputFields) {
  const label = document.createElement('label');

  label.textContent = field.name;
  label.htmlFor = field.id;
  label.className = 'field-label';

  field.placeholder = field.name[0].toUpperCase()
  + field.name.slice(1);
  field.before(label);
}