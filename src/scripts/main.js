'use strict';

const inputList = document.querySelectorAll('input');

for (const input of inputList) {
  const inputName = input.name;
  const inputId = input.id;
  let viewName = inputName[0].toUpperCase();

  for (let i = 1; i < inputName.length; i++) {
    if (inputName[i] === inputName[i].toUpperCase()) {
      viewName += ' ' + inputName[i];
      continue;
    }

    viewName += inputName[i];
  }

  const htmlText = `
    <label class="field-label" for="${inputId}">
      ${viewName}
    </label>
  `;

  input.insertAdjacentHTML('beforebegin', htmlText);
  input.placeholder = viewName;
}
