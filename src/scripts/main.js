'use strict';

const collection = document.querySelectorAll('input');

for (const element of collection) {
  const plName = element.name;

  element.placeholder = plName[0].toUpperCase() + plName.slice(1).toLowerCase();

  const newLabel = document.createElement('label');

  newLabel.innerHTML = element.name.toUpperCase();
  newLabel.className = 'field-label';
  newLabel.for = element.id;
  element.before(newLabel);
}
