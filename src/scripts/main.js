'use strict';

const inputsElArr = [...document.querySelectorAll('input')];

for (const inputEl of inputsElArr) {
  inputEl.parentElement.insertAdjacentHTML('beforeend', `
        <label 
            class = "field-label"
            for = "${inputEl.id}"
        >
            ${camelCaseToSpaces(inputEl.name)}
        </label>
    `);

  inputEl.placeholder = inputEl.name.charAt(0).toUpperCase()
        + camelCaseToSpaces(inputEl.name).slice(1);
}

function camelCaseToSpaces(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2');
}
