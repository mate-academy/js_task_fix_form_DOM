'use strict';

const list = document.querySelectorAll('.field');
const inputList = document.querySelectorAll('input');

for (let i = 0; i < list.length; i++) {
  const label = document.createElement('label');

  label.className = 'field-label';

  if (inputList[i].name.toLowerCase() === 'lastname') {
    label.textContent = 'Last name';
    inputList[i].placeholder = 'Last name';
  } else if (inputList[i].name.toLowerCase() === 'firstname') {
    label.textContent = 'First name';
    inputList[i].placeholder = 'First name';
  } else {
    label.textContent = inputList[i].name;

    inputList[i].placeholder = inputList[i].name[0].toUpperCase()
      + inputList[i].name.slice(1);
  }

  label.htmlFor = inputList[i].id;
  list[i].append(label);
}
