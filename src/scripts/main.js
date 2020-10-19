'use strict';

const input = [...document.querySelectorAll('input')];

for (const field of input) {
  const fieldLabel = document.createElement('label');

  fieldLabel.className = 'field-label';
  fieldLabel.textContent = field.name.replace(/([A-Z])/g, ' $1');
  fieldLabel.htmlFor = field.id;
  field.before(fieldLabel);

  field.placeholder = field.name;
}
