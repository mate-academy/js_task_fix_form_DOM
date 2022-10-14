'use strict';

function devide(word) {
  let result = '';

  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      result += ' ';
    }

    // i === 0 ? result += word[i].toUpperCase()
    // : result += word[i];                         // my option

    const char = i === 0 ? word[i].toUpperCase() : word[i];

    result += char;
  }

  return result;
}

const list = [...document.querySelectorAll('input')]; // array

for (const input of list) {
  const item = document.createElement('label');

  input.setAttribute('placeholder', devide(input.name));

  item.htmlFor = input.id;
  item.classList = 'field-label';

  item.innerText = (devide(input.name)).toUpperCase();

  input.parentElement.prepend(item);
}
