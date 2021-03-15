'use strict';

const inputs = [...document.querySelectorAll('input')];

for (let i = 0; i < inputsArr.length; i++) {
  const htmlInnerValue = `
  <label class="field-label" for="${inputsArr[i].id}
  ">${inputsArr[i].name.replace(/Name/, ' Name')}</label>
  `;

  inputsArr[i].insertAdjacentHTML('beforebegin', htmlInnerValue);

  inputsArr[i].placeholder = addPlaceholder(i, 'Name');
}

function addPlaceholder(i, pattern) {
  return inputsArr[i].name[0].toUpperCase() + inputsArr[i].name
    .slice(1).replace(pattern, ` ${pattern}`);
}
