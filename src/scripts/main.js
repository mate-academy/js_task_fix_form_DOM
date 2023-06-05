'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  input.setAttribute('placeholder', input.name[0].toLocaleUpperCase()
   + input.name.slice(1));

  const item = document.createElement('label');

  item.className = 'field-label';
  item.htmlFor = input.id;
  item.textContent = input.name.toLocaleUpperCase();

  input.before(item);
}
