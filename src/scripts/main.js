'use strict';

const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  const label = document.createElement('label');

  const inputName = breakToWords(input.name);

  label.className = 'field-label';
  label.textContent = inputName;
  label.htmlFor = input.id;
  label.style.textTransform = 'uppercase';

  input.parentNode.prepend(label);
  input.placeholder = inputName;
  input.style.textTransform = 'capitalize';
}

function breakToWords(word) {
  const wordArray = word.split('');

  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i] === wordArray[i].toUpperCase()) {
      wordArray.splice(i, 0, ' ');
      i++;
    }
  }

  return wordArray.join('');
}
