'use strict';

const inputsList = document.getElementsByTagName('input');

for (const el of inputsList) {
  const newElement = document.createElement('label');

  newElement.setAttribute('class', `field-label`);
  newElement.setAttribute('for', `${el.id}`);
  newElement.innerText = el.name;

  const parentElement = el.parentElement;

  newElement.append(el);
  parentElement.append(newElement);
}
