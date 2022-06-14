'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(item => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = item.id;
  label.textContent = item.name;

  item.placeholder = item.name[0].toUpperCase() + item.name.substring(1);
  item.parentElement.append(label);
});
