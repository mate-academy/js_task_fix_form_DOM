'use strict';

const parentElem = document.querySelectorAll('.field');
const fieldLabel = document.createElement('label');
const input = document.querySelectorAll('input');

[...input].forEach(elem => {
  elem.placeholder = elem.name.toUpperCase();
});

fieldLabel.className = 'field-label';

[...parentElem].forEach(elem => {
  elem.append(fieldLabel.cloneNode(true));
});

[...parentElem].forEach(elem => {
  elem.lastElementChild.htmlFor = elem.firstElementChild.id;
  elem.lastElementChild.textContent = elem.firstElementChild.name;
});
