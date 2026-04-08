'use strict';

const form = [...document.querySelectorAll('form')];
const allInputs = [];

form.forEach((el) => allInputs.push([...el.querySelectorAll('input')]));

allInputs.flat().forEach((el) => {
  const elementId = el.id;
  const elementName = el.name;
  const upperName = elementName[0].toUpperCase() + elementName.slice(1);
  const newLabel = document.createElement('label');
  const target = document.getElementById(elementId);

  newLabel.setAttribute('for', elementId);

  target.setAttribute('placeholder', upperName);
  newLabel.textContent = elementName;
  newLabel.className = 'field-label';
  target.insertAdjacentElement('beforebegin', newLabel);
});
