'use strict';

const fields = document.querySelectorAll('form input');

fields.forEach((item) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', item.id);
  label.textContent = item.name;

  item.placeholder = item.name[0].toUpperCase() + item.name.slice(1);

  item.before(label);
});
