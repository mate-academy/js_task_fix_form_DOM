'use strict';

// write code here
const inputs = document.querySelectorAll('input');

inputs.forEach((item) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = item.id;
  label.textContent = item.name.charAt(0).toUpperCase() + item.name.slice(1);

  item.insertAdjacentElement('beforebegin', label);

  item.placeholder = item.name.charAt(0).toUpperCase() + item.name.slice(1);
});
