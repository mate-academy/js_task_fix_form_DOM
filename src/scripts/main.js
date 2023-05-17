'use strict';

const inputs = document.querySelectorAll('.field-text');
const divElem = document.querySelectorAll('.field');

for (let i = 0; i < divElem.length; i++) {
  const label = document.createElement('label');
  const capitalizedWord = inputs[i].name.replace(
    inputs[i].name[0], inputs[i].name[0].toUpperCase());

  inputs[i].placeholder = capitalizedWord;

  label.className = 'field-label';
  label.htmlFor = inputs[i].id;
  label.textContent = inputs[i].name;

  divElem[i].append(label);
}
