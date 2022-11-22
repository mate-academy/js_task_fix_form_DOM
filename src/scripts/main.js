'use strict';

const list = document.querySelectorAll('.field');
const inputList = document.querySelectorAll('input');

for (let i = 0; i < list.length; i++) {
  const label = document.createElement('label');

  label.className = 'field-label';

  label.textContent = inputList[i].name;

  inputList[i].placeholder = inputList[i].name[0].toUpperCase()
    + inputList[i].name.slice(1);

  label.htmlFor = inputList[i].id;
  list[i].append(label);
}
