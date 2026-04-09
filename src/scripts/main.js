'use strict';

const inputs = document.querySelectorAll('input');

function adaptName(str) {
  let adaptedStr = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      adaptedStr += ' ';
    }

    adaptedStr += str[i];
  }

  return adaptedStr;
}

inputs.forEach((inp) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.htmlFor = inp.id;
  label.innerText = adaptName(inp.name);
  inp.before(label);
  inp.placeholder = adaptName(inp.name);
});
