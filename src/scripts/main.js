'use strict';

function camelCase(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];

    if (currentChar.toUpperCase() === currentChar) {
      result += ' ';
    }

    result += currentChar.toUpperCase();
  }

  return result;
}

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  input.setAttribute('placeholder', input.name[0].toLocaleUpperCase()
   + camelCase(input.name.slice(1)).toLocaleLowerCase());

  const item = document.createElement('label');

  item.className = 'field-label';
  item.htmlFor = input.id;

  item.textContent = camelCase(input.name);

  input.before(item);
}
