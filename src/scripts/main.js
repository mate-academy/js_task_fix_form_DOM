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
  let x = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i - 1] === ' ' || i === 0) {
      x += str[i].toUpperCase();
    } else {
      x += str[i];
    }
  }

  return x;
}
