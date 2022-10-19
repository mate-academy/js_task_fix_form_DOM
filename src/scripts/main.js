'use strict';

function divide(word) {
  let result = '';

  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      result += ' ';
    }

    const char = i === 0 ? word[i].toUpperCase() : word[i];

    result += char;
  }

  return result;
}

const list = [...document.querySelectorAll('input')];

for (const input of list) {
  const inputName = divide(input.name);
  const item = document.createElement('label');

  input.setAttribute('placeholder', inputName);

  item.htmlFor = input.id;
  item.classList = 'field-label';

  item.innerText = inputName.toUpperCase();

  input.parentElement.prepend(item);
}
