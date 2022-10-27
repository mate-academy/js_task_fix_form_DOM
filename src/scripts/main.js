'use strict';

const inputsList = document.getElementsByTagName('input');

for (const inputItem of inputsList) {
  const newElement = document.createElement('label');

  newElement.setAttribute('class', `field-label`);
  newElement.setAttribute('for', `${inputItem.id}`);
  inputItem.setAttribute('placeholder', `${inputItem.name}`);
  newElement.innerText = `${inputItem.name}`;

  const itemParent = inputItem.parentElement;

  itemParent.prepend(newElement);
}
