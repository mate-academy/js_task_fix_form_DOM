'use strict';

const inputs = document.querySelectorAll('input');

const getCapitalizeName = (str) =>
  ((str[0].toUpperCase()
  + str.slice(1)).replace(/([A-Z])/g, ' $1')).slice(1);

for (const i of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = i.id;
  label.textContent = getCapitalizeName(i.name);

  i.placeholder = getCapitalizeName(i.name);
  i.parentElement.append(label);
}
