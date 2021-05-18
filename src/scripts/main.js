'use strict';

// write code here
const input = [...document.querySelectorAll('input')];

for (const elem of input) {
  const label = document.createElement('label');

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', elem.id);
  label.setAttribute('textContent', elem.name);
  elem.setAttribute('placeholder', firstLetter(elem.name));
}

function firstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
