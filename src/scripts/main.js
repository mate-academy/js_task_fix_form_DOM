'use strict';

const inputList = document.getElementsByTagName('input');

for (const element of inputList) {
  element.setAttribute('placeholder',
    `${formatPlaceholder(element.name)}`);

  element.insertAdjacentHTML('beforebegin', `
    <label class="field-label" for="${element.id}">
      ${element.name}
    </label>
  `);
}

function formatPlaceholder(str) {
  const newStr = str.slice(1);
  let result = '';

  for (let i = 0; i < newStr.length; i++) {
    if (newStr.charCodeAt(i) <= 90) {
      result += ' ';
    }
    result += newStr[i];
  }

  return (str[0].toUpperCase() + result);
}
