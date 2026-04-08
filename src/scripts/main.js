'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(item => {
  const label = document.createElement('label');

  item.placeholder = item.name.toUpperCase();

  label.className = 'field-label';
  label.textContent = item.name;
  label.htmlFor = item.id;

  item.parentElement.prepend(label);
});
