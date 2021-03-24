'use strict';

const allInput = [...document.querySelectorAll('input')];
const allFiled = [...document.querySelectorAll('.field')];

for (let i = 0; i < allInput.length; i++) {
  const holder = allInput[i].name.split('');

  for (let j = 0; j < holder.length; j++) {
    if (holder[j] === holder[j].toUpperCase()) {
      holder.splice(holder.indexOf(holder[j]), 0, ' ');
      j++;
    }
  }

  holder[0] = holder[0].toUpperCase();
  allInput[i].placeholder = holder.join('');

  allFiled[i].insertAdjacentHTML('afterbegin', `
  <label class="field-label" for="${allInput[i].id}">
    ${holder.join('').toUpperCase()}
  </label>
`);
}
