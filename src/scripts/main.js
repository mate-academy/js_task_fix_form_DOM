'use strict';

const fields = [...document.querySelectorAll('input.field-text')];

fields.forEach((field) => {
  const label = document.createElement('label');
  const placeholderText = field.name[0].toUpperCase() + field.name.slice(1);

  label.classList.add('field-label');
  label.setAttribute('for', field.id);
  label.textContent = field.name;
  field.setAttribute('placeholder', placeholderText);
  field.before(label);
});
