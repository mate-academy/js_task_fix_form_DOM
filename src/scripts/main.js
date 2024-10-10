'use strict';

// write code here

const div = [...document.getElementsByClassName('field')];
const elements = [...document.getElementsByTagName('input')];

elements.forEach((el, i) => {
  el.placeholder = el.name[0].toUpperCase() + el.name.slice(1);

  const newLabel = document.createElement('label');

  newLabel.className = 'field-label';
  newLabel.setAttribute('for', el.id);
  newLabel.textContent = el.name.toUpperCase();

  div[i].append(newLabel);
});
