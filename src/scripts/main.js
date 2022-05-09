'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(el => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = el.id;
  label.textContent = el.name;
  el.parentElement.prepend(label);
  el.placeholder = el.name[0].toUpperCase() + el.name.slice(1);
});
