'use strict';

function nameFormat(word) {
  let result = word.slice(0, 1).toUpperCase();

  for (let i = 1; i < word.length; i++) {
    if ((word[i] !== word[i].toLowerCase())) {
      result += ' ' + word[i].toLowerCase();
    } else {
      result += word[i];
    }
  }

  return result;
}

const inputs = document.querySelectorAll('input');

[...inputs].forEach(input => {
  const label = document.createElement('label');

  label.className = ['field-label'];
  label.htmlFor = input.id;
  label.textContent = nameFormat(input.name).toUpperCase();
  input.before(label);

  input.placeholder = nameFormat(input.name);
});
