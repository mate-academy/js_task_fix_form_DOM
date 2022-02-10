'use strict';

const initialList = document.querySelectorAll('input');
const rootElement = document.getElementsByClassName('field');
const mass = ['FIRST NAME', 'LAST NAME', 'EMAIL', 
'PASSWORD', 'EMAIL', 'PASSWORD'];

for (let i = 0; i < initialList.length; i++) {
  const item = document.createElement('label');

  item.className = 'field-label';
  item.textContent = mass[i];
  item.htmlFor = initialList[i].id;
  rootElement[i].append(item);
}

for (const el of initialList) {
  el.name = el.name[0].toUpperCase() + el.name.substring(1);
  el.placeholder = el.name;
}
