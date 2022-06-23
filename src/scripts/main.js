'use strict';

// write code here

const list = document.querySelectorAll('input');

for (const item of list) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', item.id);
  label.textContent = item.name;

  item.placeholder
    = item.name.charAt(0).toUpperCase() + item.name.slice(1);
  item.parentElement.append(label);
}
