'use strict';

// write code here
const inputs = document.querySelectorAll('input');

inputs.forEach(element => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = element.id;
  label.textContent = element.name.replace(/([A-Z])/g, ' $1').toLowerCase();
  element.placeholder = element.name.replace(/([A-Z])/g, ' $1').toUpperCase();
  element.parentElement.prepend(label);
});
