'use strict';

// write code here
const inputs = [...document.querySelectorAll('input')];

for (const value of inputs) {
  const label = `
    <label class="field-label" for="${value.id}">
      ${camelToString(value.name)}
    </label>
  `;

  value.setAttribute('placeholder', camelToString(value.name));
  value.insertAdjacentHTML('beforebegin', label);
}

function camelToString(str) {
  let newStr = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i] !== str[i].toLowerCase()) {
      newStr += ' ';
    }
    newStr += str[i];
  }

  return newStr;
}
