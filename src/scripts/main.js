'use strict';

const inputs = document.querySelectorAll('form > * > input');

for (const item of inputs) {
  const label = document.createElement('label');
  const formattedName =
    item.name.charAt(0).toUpperCase() +
    item.name
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .toLowerCase()
      .slice(1);

  label.className = 'field-label';
  label.htmlFor = item.id;
  label.innerText = item.name;
  item.placeholder = formattedName;

  item.before(label);
}
