'use strict';

// write code here
const colectionInputs = document.querySelectorAll('input');

colectionInputs.forEach(element => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = element.name;
  label.for = element.id;

  element.insertAdjacentElement('beforebegin', label);

  element.placeholder = (
    element.name[0].toUpperCase() + element.name.slice(1));
});
