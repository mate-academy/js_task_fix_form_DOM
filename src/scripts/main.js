'use strict';

// write code here
const input = [...document.querySelectorAll('input')];

fixForm(input);

function fixForm(fields) {
  fields.forEach(item => {
    const label = document.createElement('label');
    const text = getText(item.name);

    label.htmlFor = item.id;
    label.className = 'field-label';
    label.innerText = text.toUpperCase();
    item.placeholder = text;

    item.before(label);
  });
}

function getText(word) {
  let newStr = '';

  for (const letter of word) {
    if (letter === letter.toUpperCase()) {
      newStr += ' ';
      newStr += letter;
    } else {
      newStr += letter;
    }
  }

  const result = newStr.charAt(0).toUpperCase() + newStr.slice(1);

  return result;
}
