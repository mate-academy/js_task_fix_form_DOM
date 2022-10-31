'use strict';

const inputs = document.querySelectorAll('input');

const arrOfInputs = [...inputs];

for (const el of arrOfInputs) {
  el.insertAdjacentHTML('beforebegin', `
    <label for='${el.id}' class='field-label'> 
    ${Capitalize(el.name)}
    </label>
    `);

  el.placeholder = Capitalize(el.name);
};

function Capitalize(str) {
  let result = str;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      result = str.slice(0, i) + ' ' + str.slice(i);
    }
  }

  return result.toUpperCase();
};
