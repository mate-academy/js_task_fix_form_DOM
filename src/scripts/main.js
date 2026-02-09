'use strict';

const fields = document.querySelectorAll('form input');

fields.forEach((item) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', item.id);
  label.textContent = item.name;

  const placeholder = item.name.toLowerCase();

  item.placeholder = placeholder[0].toUpperCase() + placeholder.slice(1);

  item.before(label);
});
