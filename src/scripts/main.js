'use strict';

const inputs = document.querySelectorAll('input');

const bigLetter = (str) => {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      newStr += ' ';
    }

    newStr += str[i];
  }

  return newStr;
};

inputs.forEach(el => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = bigLetter(el.name);
  label.htmlFor = el.id;

  el.setAttribute('placeholder', bigLetter(el.name));
  el.style.textTransform = 'capitalize';

  el.before(label);
});
