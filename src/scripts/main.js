'use strict';

const values = document.querySelectorAll('input');

for (const item of values) {
  item.placeholder = `${setRightName(item.name)}`;

  item.insertAdjacentHTML('afterend', `
  <label for=${item.id} class='field-label'>
  ${setRightName(item.name)}
  </label>
  `);
}

function setRightName(string) {
  let textName = string[0].toUpperCase();

  for (let i = 1; i < string.length; i++) {
    if (string[i] === string[i].toLowerCase()) {
      textName += string[i];
    } else {
      textName += ' ' + string[i];
    }
  }

  return textName;
}
