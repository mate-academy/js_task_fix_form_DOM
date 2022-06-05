'use strict';

const list = document.querySelectorAll('input');

for (const elem of list) {
  const elemLabel = document.createElement('label');

  elemLabel.className = 'field-label';
  elemLabel.setAttribute('for', elem.id);
  elemLabel.textContent = elem.name;

  elem.placeholder = elem.name[0].toUpperCase + elem.name.substring(1);
  elem.parentElement.append(elemLabel);
};
