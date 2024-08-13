'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');
  const attributeName = separateWords(input.name);

  label.htmlFor = input.id;
  label.innerText = attributeName;
  label.className = 'field-label';
  input.placeholder = attributeName;
  input.before(label);
}

function separateWords(word) {
  let separatedStr = '';

  [...word].forEach((ch, i) => {
    if (i === 0) {
      separatedStr += ch.toUpperCase();
    } else if (ch === ch.toUpperCase()) {
      separatedStr += ' ' + ch;
    } else {
      separatedStr += ch;
    }
  });

  return separatedStr;
}
