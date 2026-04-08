'use strict';

const inputsList = document.querySelectorAll('input');

for (let i = 0; i < inputsList.length; i++) {
  const label = document.createElement('label');
  let word = inputsList[i].name.split('');

  word[word.findIndex(letter => letter === letter.toUpperCase()) - 1] += ' ';

  word = word.join('');

  inputsList[i].placeholder = word[0].toUpperCase()
  + word.slice(1);

  label.className = 'field-label';
  label.textContent = word;
  label.htmlFor = inputsList[i].id;

  inputsList[i].parentNode.appendChild(label);
}
