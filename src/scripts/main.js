'use strict';

function splitter(str) {
  let string = str;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      string = str.slice(0, i) + ' ' + str.slice(i);
    }
  };

  return string.toUpperCase();
}

const inputs = document.querySelectorAll('input');
const arrOfInputs = [...inputs];

for (const input of arrOfInputs) {
  input.insertAdjacentHTML('beforebegin', `
    <label for="${input.id}" class="field-label">
    ${splitter(input.name)}
    </label>
  `);

  input.placeholder = splitter(input.name);
}
