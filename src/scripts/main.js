'use strict';

const inputs = document.querySelectorAll('input');

[...inputs].forEach(el => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = el.id;
  label.textContent = firstLetter(el.name);

  el.parentElement.append(label);
  el.placeholder = firstLetter(el.name);
});

function firstLetter(text) {
  let res = text[0].toUpperCase();

  for (let i = 1; i < text.length; i++) {
    if (text[i] === text[i].toUpperCase()) {
      res += ` ${text[i]}`;
    } else {
      res += `${text[i]}`;
    }
  }

  return res;
}
