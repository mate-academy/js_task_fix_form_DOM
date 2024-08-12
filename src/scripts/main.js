'use strict';

const inputs = document.querySelectorAll('form > * > input');

for (const item of inputs) {
  const label = document.createElement('label');
  const formattedName = camelToNormal(item.name);

  label.className = 'field-label';
  label.htmlFor = item.id;
  label.innerText = formattedName;
  item.placeholder = formattedName;

  item.before(label);
}

function camelToNormal(text) {
  return (
    text.charAt(0).toUpperCase() +
    text
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .toLowerCase()
      .slice(1)
  );
}
