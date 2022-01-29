'use strict';

document.querySelectorAll('input');

const input = document.querySelectorAll('input');

for (const item of input) {
  item.placeholder = item.name.charAt(0).toLocaleUpperCase(0)
  + item.name.slice(1);

  const elem = document.createElement('label');

  elem.setAttribute('class', 'field-label');
  elem.setAttribute('id', item.id);

  elem.textContent = item.name.charAt(0).toLocaleUpperCase(0)
  + item.name.slice(1);
  item.parentElement.prepend(elem);
}
