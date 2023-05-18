'use strict';

const inputs = document.querySelectorAll('.field-text');
const divElem = document.querySelectorAll('.field');

for (let i = 0; i < divElem.length; i++) {
  const label = document.createElement('label');
  let capitalizedWord = inputs[i].name.replace(
    inputs[i].name[0], inputs[i].name[0].toUpperCase());

  if (capitalizedWord.includes('Name')) {
    capitalizedWord = capitalizedWord.slice(0, capitalizedWord.indexOf('N'))
    + ' '
    + capitalizedWord.slice(capitalizedWord.indexOf('N'));
  }

  inputs[i].placeholder = capitalizedWord;
  label.className = 'field-label';
  label.htmlFor = inputs[i].id;
  label.textContent = capitalizedWord;

  divElem[i].append(label);
}
