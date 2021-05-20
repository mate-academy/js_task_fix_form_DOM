'use strict';

const input = document.querySelectorAll('input');

for (const elem of input) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', elem.id);
  label.textContent = elem.name;
  elem.setAttribute('placeholder', firstLetter(elem.name));
  elem.parentElement.append(label);
}

function firstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
