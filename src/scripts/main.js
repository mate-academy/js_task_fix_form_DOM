'use strict';

const inputs = document.querySelectorAll('input');

const label = document.createElement('label');

for (const item of inputs) {
  item.placeholder = item.name[0].toUpperCase() + item.name.slice(1);

  label.htmlFor = item.id;
  label.textContent = item.name.toUpperCase();
  label.className = 'field-label';

  item.before(label.cloneNode(true));
}
