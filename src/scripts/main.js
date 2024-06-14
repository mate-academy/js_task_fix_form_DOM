'use strict';

const fields = [...document.querySelectorAll('.field-text')];

fields.forEach((field) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = field.id;
  label.textContent = field.name;

  field.placeholder = field.name;

  field.insertAdjacentElement('afterend', label);
});
