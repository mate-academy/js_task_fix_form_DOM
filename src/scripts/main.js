'use strict';

const inputs = document.querySelectorAll('input');

[...inputs].map(input => {
  const label = document.createElement('label');

  label.className = ['field-label'];
  label.htmlFor = input.id;
  label.textContent = formatWord(input.name);
  input.before(label);

  input.placeholder = formatWord(input.name);
});

function formatWord(word) {
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
