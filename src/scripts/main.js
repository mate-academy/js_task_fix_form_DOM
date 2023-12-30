'use strict';

const fields = document.querySelectorAll('.field');

fields.forEach(field => {
  const label = document.createElement('label');

  field.children[0].setAttribute('placeholder',
    field.children[0].name.charAt(0).toUpperCase()
    + field.children[0].name.slice(1));

  label.className = 'field-label';
  label.htmlFor = field.children[0].id;
  label.textContent = field.children[0].name;
  field.append(label);
});
