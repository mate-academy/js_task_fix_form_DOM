'use strict';

const list = [...document.querySelectorAll('input')];

function devide(word) {
  const stringWord = String(word);

  let result = '';

  for (let i = 0; i < stringWord.length; i++) {
    if (stringWord[i] === stringWord[i].toUpperCase()) {
      result += ' ';
    }

    i === 0 ? result += stringWord[i].toUpperCase() : result += stringWord[i];
  }

  return result;
}

for (const input of list) {
  const item = document.createElement('label');

  input.setAttribute('placeholder', devide(input.name));

  item.htmlFor = input.id;
  item.classList = 'field-label';

  item.innerText = (devide(input.name)).toUpperCase();

  input.parentElement.prepend(item);
}
