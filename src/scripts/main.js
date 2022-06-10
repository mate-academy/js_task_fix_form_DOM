'use strict';

const input = document.querySelectorAll('input');

for (const i of input) {
  const label = document.createElement('label');

  label.htmlFor = i.id;
  label.textContent = i.name;
  label.className = 'field-label';

  i.placeholder = i.name.charAt(0).toUpperCase()
  + i.name.toLowerCase().slice(1);

  i.parentElement.append(label);
}
