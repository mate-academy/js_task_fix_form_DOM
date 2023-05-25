'use strict';

const inputs = document.querySelectorAll('input');

for (const char of inputs) {
  const newlabel = document.createElement('label');

  newlabel.setAttribute('for', char.id);

  newlabel.classList.add('field-label');

  const box = document.querySelector('input').parentNode;

  box.appendChild(newlabel);

  char.setAttribute('placeholder', capitalLetter(char.name));
}

function capitalLetter(str) {
  const x = str.split(' ').map((word) =>
    `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`);

  const y = x.join().split('');

  let result = '';

  for (let i = 0; i < y.length; i++) {
    if (y[i + 1] === 'n') {
      result += (y[i] + `${' '}`);
    } else {
      result += y[i];
    }
  }

  return result;
}
