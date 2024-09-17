'use strict';

const inputs = document.querySelectorAll('input');
const label = document.createElement('label');

label.className = 'field-label';

for (const input of inputs) {
  label.textContent = gap(input.name);
  label.htmlFor = input.id;
  input.before(label.cloneNode(true));

  input.placeholder = (input.name.charAt(0).toUpperCase()
    + gap(input.name).slice(1));
}

function gap(word) {
  const arr = word.split('');
  const indexUpperLetter = arr.findIndex(letter => letter
    !== letter.toLowerCase()
  );

  if (indexUpperLetter === -1) {
    return word;
  } else {
    arr.splice(indexUpperLetter, 0, ' ');

    return arr.join('');
  }
}
