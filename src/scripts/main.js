'use strict';

const rootElement = document.getElementsByClassName('field');
const allInputs = document.querySelectorAll('input');

for (let i = 0; i < allInputs.length; i++) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = allInputs[i].name.replace(/Name/, ' Name');
  label.htmlFor = allInputs[i].id;

  rootElement[i].append(label);

  allInputs[i].placeholder = allInputs[i].name[0].toUpperCase()
  + allInputs[i].name.slice(1).replace(/Name/, ' Name');
}
