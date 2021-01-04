'use strict';

const forms = (document.querySelectorAll('form'));

forms.forEach(form => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach(input => {
    const inputName = input.name;
    const parentDiv = input.parentElement;

    input.placeholder = capitalize(inputName);

    parentDiv.insertAdjacentHTML('afterbegin', `
      <label class="field-label" for = ${inputName}>
        ${inputName}
      </label>
    `);
  });
});

function capitalize(string) {
  let result = string[0].toUpperCase();
  let lastCut = 1;

  for (let i = 1; i < string.length; i++) {
    const charCode = string.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      result += string.slice(lastCut, i);
      result += ' ';
      lastCut = i;
    }
  }

  result += string.slice(lastCut, string.length);

  return result;
}
