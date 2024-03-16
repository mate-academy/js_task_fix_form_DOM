'use strict';

// write code here
const inputs = document.querySelectorAll('input');

inputs.forEach((item) => {
  const label = document.createElement('label');

  const words = item.name.split(/(?=[A-Z])/);

  const labelText = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  label.className = 'field-label';
  label.htmlFor = item.id;
  label.textContent = labelText;

  item.insertAdjacentElement('beforebegin', label);

  item.placeholder = labelText;
});
