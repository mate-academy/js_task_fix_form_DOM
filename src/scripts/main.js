'use strict';

// write code here
const inputs = document.querySelectorAll('input');
const array = [...inputs];

const fields = document.querySelectorAll('.field');

for (const i in array) {
  const item = document.createElement('label');

  item.className = 'field-label';
  item.textContent = `${array[i].name}`;
  item.setAttribute('for', `${array[i].id}`);

  fields[i].append(item);

  inputs[i].setAttribute('placeholder', `
    ${array[i].name.charAt(0).toUpperCase() + array[i].name.slice(1)}`);
}
