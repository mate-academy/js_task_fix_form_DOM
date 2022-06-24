'use strict';

// write code here

const list = document.querySelectorAll('input');

for (const item of list) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', item.id);

  if (item.name === 'firstName') {
    item.name = 'First Name';
  }

  if (item.name === 'lastName') {
    item.name = 'Last Name';
  }

  label.textContent = item.name;

  item.placeholder
    = item.name;
  item.parentElement.append(label);
}
