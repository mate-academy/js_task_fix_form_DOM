'use strict';

const fields = document.querySelectorAll('.field-text');

for (const elem of fields) {
  const label = document.createElement('label');
  const fieldName = elem.name.replace(/Name/, ' Name');

  label.className = 'field-label';
  label.textContent = fieldName;
  label.htmlFor = elem.id;
  elem.before(label);

  elem.placeholder = fieldName[0].toUpperCase() + fieldName.slice(1);
}
