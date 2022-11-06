'use strict';

const inputs = document.querySelectorAll('input');

const arrOfInputs = [...inputs];

for (const el of arrOfInputs) {
  el.insertAdjacentHTML('beforebegin', `
    <label for='${el.id}' class='field-label'> 
    ${caps(el.name)}
    </label>
    `);

  el.placeholder = el.name[0]
    .toUpperCase() + caps(el.name).toLowerCase().slice(1);
};

function caps(str) {
  let result = str;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      result = str.slice(0, i) + ' ' + str.slice(i);
    }
  }

  return result.toUpperCase();
};
