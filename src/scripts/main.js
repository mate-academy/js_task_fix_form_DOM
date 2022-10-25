'use strict';

const inputs = document.querySelectorAll('input');
const logWrap = document.querySelector('.login-wrap');
const fields = document.querySelectorAll('.field');

logWrap.style.height = 'max-content';

for (const field of fields) {
  field.style.cssText = 'font-weight: bold';
}

for (const input of [...inputs]) {
  let inpName = input.name[0].toUpperCase();

  for (let i = 1; i < input.name.length; i++) {
    inpName += input.name[i] === 'N'
      ? ' ' + input.name[i].toLowerCase()
      : input.name[i];
  }

  input.placeholder = `${inpName}`;
  input.before(`${inpName}:`);
}
