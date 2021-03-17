'use strict';

const allInput = [...document.querySelectorAll('input')];
const allFiled = [...document.querySelectorAll('.field')];

for (let i = 0; i < allInput.length; i++) {
  const holder = allInput[i].name.split('');

  holder[0] = holder[0].toUpperCase();
  allInput[i].placeholder = holder.join('');

  allFiled[i].insertAdjacentHTML('afterbegin', `
  <label class="field-label" for="${allInput[i].id}">
    ${allInput[i].name.toUpperCase()}
  </label>
`);
}
