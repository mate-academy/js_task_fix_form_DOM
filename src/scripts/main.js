'use strict';

function capitalize(word) {
  const wordArr = word.split(' ');

  for (let i = 0; i < wordArr.length; i++) {
    wordArr[i] = wordArr[i][0].toUpperCase() + wordArr[i].substring(1);
  }

  return wordArr.join(' ');
}

const inputs = document.querySelectorAll('input');

for (const element of inputs) {
  const label = document.createElement('label');

  element.name = capitalize(element.name);
  element.setAttribute('placeholder', `${element.name}`)

  label.className = 'field-label';
  label.setAttribute('for', `${element.id}`);
  label.innerHTML = `${element.name}`;
  element.before(label);
}
