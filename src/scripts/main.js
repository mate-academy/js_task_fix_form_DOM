'use strict';

const fields = document.querySelectorAll('input');

for (const element of fields) {
  const { id, name } = element;
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = id;
  label.textContent = name.replace(/([A-Z])/g, ' $1');
  element.before(label);

  element.placeholder = name[0].toUpperCase()
    + name.slice(1).replace(/([A-Z])/g, ' $1');
}
