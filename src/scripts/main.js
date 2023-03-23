'use strict';

const fields = [...document.querySelectorAll('input')];

fixForm(fields);

function fixForm(inputs) {
  inputs.forEach(item => {
    const labelEl = document.createElement('label');
    const text = getText(item.name);

    labelEl.htmlFor = item.id;
    labelEl.className = 'field-label';
    labelEl.innerText = text.toUpperCase();
    item.placeholder = text;

    item.before(labelEl);
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

  return newStr.charAt(0).toUpperCase() + newStr.slice(1);
}