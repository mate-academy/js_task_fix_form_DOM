'use strict';

// write code here
const inputs = document.querySelectorAll('input');

inputs.forEach(item => {
  const parentDiv = item.parentNode;
  const label = document.createElement('label');
  const id = item.getAttribute('id');
  const placeholder = item.getAttribute('name').replace(/(?=[A-Z])/, ' ');

  label.textContent = placeholder;
  label.setAttribute('class', 'field-label');
  label.setAttribute('for', id);
  item.setAttribute('placeholder', placeholder.toUpperCase());
  parentDiv.prepend(label);
});
