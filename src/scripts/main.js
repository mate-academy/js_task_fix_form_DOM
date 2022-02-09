'use strict';

const initialList = document.querySelectorAll('input');
const rootElement = document.getElementsByClassName('field');

for (let i = 0; i < initialList.length; i++) {
  const item = document.createElement('label');

  item.className = 'field-label';
  item.textContent = initialList[i].name.toUpperCase();
  item.htmlFor = initialList[i].id;
  rootElement[i].append(item);
}

for (const el of initialList) {
  el.name = el.name[0].toUpperCase() + el.name.substring(1);
  el.placeholder = el.name;
}
