'use strict';

const inputs = document.querySelectorAll('input');

for (const item of inputs) {
  item.before(document.createElement('label'));
  item.previousSibling.className = 'field-label';
  item.previousSibling.htmlFor = item.id;
  item.previousSibling.textContent = item.name;
  item.placeholder = item.name.charAt(0).toUpperCase() + item.name.slice(1);
}
