'use strict';

const inputs = document.querySelectorAll('input');

function firstToUpper(str) {
  return str[0].toUpperCase() + str.slice(1);
}

for (const e of [...inputs]) {
  e.insertAdjacentHTML('beforebegin', `
  <label class="field-label">
    ${e.name}
  </label>`);

  e.setAttribute('placeholder', firstToUpper(e.name));
}
