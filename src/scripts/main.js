'use strict';

const listOfInputs = document.querySelectorAll('input');

for (const item of [...listOfInputs]) {
  const newLabel = document.createElement('label');
  const elementId = item.getAttribute('id');

  newLabel.className = 'field-label';
  newLabel.setAttribute('for', elementId);
  newLabel.textContent = item.name;

  const place = item.name[0].toUpperCase() + item.name.slice(1).toLowerCase();

  item.after(newLabel);
  item.setAttribute('placeholder', place);
};
