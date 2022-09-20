'use strict';

// write code here
const fields = document.querySelectorAll('.field');

for (const field of fields) {
  const newLabel = document.createElement('label');
  const fieldName = field.firstElementChild.id
    .split('-')
    .filter(a => a !== 'sign' && a !== 'up' && a !== 'in')
    .join(' ');

  newLabel.setAttribute('for', field.firstElementChild.id);
  newLabel.classList.add('field-label');
  newLabel.innerHTML = field.firstElementChild.name;

  field.firstElementChild.placeholder = fieldName[0].toUpperCase()
    + fieldName.slice(1);
  field.insertBefore(newLabel, field.firstElementChild);
}
