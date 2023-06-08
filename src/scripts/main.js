'use strict';

const inputs = document.querySelectorAll('input');
const inputsArray = [...inputs];

for (const input of inputsArray) {
  const myLabel = document.createElement('label');

  myLabel.className = 'field-label';
  myLabel.setAttribute('for', input.id);
  myLabel.innerText = input.name;
  input.before(myLabel);
  input.setAttribute('placeholder', input.name.toUpperCase());
}
