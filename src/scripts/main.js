'use strict';

const allInputs = document.querySelectorAll('input');

for (let i = 0; i < allInputs.length; i++) {
  const newLabel = document.createElement('label');

  newLabel.className = 'field-label';
  newLabel.htmlFor = allInputs[i].id;
  newLabel.textContent = allInputs[i].name;

  allInputs[i].placeholder = allInputs[i].name[0].toUpperCase()
  + allInputs[i].name.slice(1);
  document.querySelectorAll('.field')[i].prepend(newLabel);
}
