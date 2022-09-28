'use strict';

// write code here

const list = [...document.querySelectorAll('input')];

list.forEach((item) => {
  item.placeholder = item.name;

  const label = document.createElement('label');

  label.htmlFor = item.id;
  label.textContent = item.name;
  label.className = 'field-label';
  item.parentElement.append(label);
});
