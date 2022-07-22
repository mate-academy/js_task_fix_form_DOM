'use strict';

const inputList = document.querySelectorAll('input');

for (const element of inputList) {
  const label = document.createElement('label');

  label.htmlFor = element.id;
  label.className = 'field-label';
  label.innerText = element.name;
  element.placeholder = element.name[0].toUpperCase() + element.name.slice(1);
  element.before(label);
}
