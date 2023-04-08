'use strict';

const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = input.name;
  label.htmlFor = input.id;
  label.style.textTransform = 'uppercase';

  input.parentNode.prepend(label);
  input.setAttribute('placeholder', breakToWords(input.name));
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
