'use strict';

const inputsCollection = document.querySelectorAll('input');

for (const elem of inputsCollection) {
  const labelForInput = document.createElement('label');
  const parentElem = elem.parentNode;

  labelForInput.className = 'field-label';
  labelForInput.textContent = elem.name.toUpperCase();
  labelForInput.setAttribute('for', elem.id);
  parentElem.prepend(labelForInput);

  elem.setAttribute('placeholder',
    elem.name[0].toUpperCase() + elem.name.slice(1));
}
