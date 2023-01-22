'use strict';

const input = document.querySelectorAll('input');
const arrOfTag = [...input];

for (const el of arrOfTag) {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.textContent = firstLetter(el.getAttribute('name'));

  el.setAttribute('placeholder', firstLetter(label.textContent));
  el.after(label);
}

function firstLetter(letter) {
  const resLetter = letter.charAt(0).toUpperCase()
  + letter.slice(1).replace(/([A-Z])/g, word => ` ${word}`);

  return resLetter;
}
