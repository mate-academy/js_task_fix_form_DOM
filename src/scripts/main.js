'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const item = document.createElement('label');

  item.classList = 'field-label';
  item.htmlFor = input.id;
  item.textContent = input.name;

  input.after(item);

  input.placeholder = input.name[0].toUpperCase()
    + input.name.slice(1);
}
