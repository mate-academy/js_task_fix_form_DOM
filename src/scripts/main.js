'use strict';

const fields = document.querySelectorAll('.login-wrap input');

[...fields].forEach(field => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', field.id);
  label.textContent = field.name;

  const inputName = field.name[0].toUpperCase()
  + field.name.slice(1).toLowerCase();

  field.setAttribute('placeholder', inputName);

  field.before(label);
});
