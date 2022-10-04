'use strict';

// write code here

const list = [...document.querySelectorAll('input')];

list.forEach((item) => {
  const upName = item.name.toUpperCase();

  let nameInput = '';

  for (let i = 0; i < upName.length; i++) {
    if (item.name[i] === upName[i]) {
      nameInput += ' ' + item.name[i];
    } else {
      nameInput += item.name[i];
    }
  }

  item.placeholder = nameInput;

  const label = document.createElement('label');

  label.htmlFor = item.id;
  label.textContent = nameInput;
  label.className = 'field-label';
  item.parentElement.append(label);
});
