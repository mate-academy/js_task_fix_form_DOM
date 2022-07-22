'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const template = `<lable class="field-label" for="${
    input.id}">${input.textContent = createTextLable(input.name)}</lable>`;

  input.placeholder = createTextPlaceholder(input.name);

  input.insertAdjacentHTML('beforebegin', template);
}

function createTextLable(str) {
  return str.split('N').join(' N').toUpperCase();
}

function createTextPlaceholder(str) {
  const firstLater = str.charAt(0).toUpperCase();
  const reformStr = (firstLater + str.slice(1)).split('N').join(' N');

  return reformStr;
}
