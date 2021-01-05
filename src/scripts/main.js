'use strict';

const wrapper = document.querySelectorAll('.field');

function slice(input) {
  const result = input.split('').map((letter, index) => {
    return letter === letter.toUpperCase()
      ? ' ' + letter
      : index === 0
        ? letter.toUpperCase()
        : letter;
  }).join('');

  return result;
}

for (const item of wrapper) {
  const inputName = item.children[0].name;

  item.children[0].placeholder = slice(inputName);

  item.insertAdjacentHTML('afterbegin', `
      <label class="field-label" for="${item.children[0].id}">
      ${slice(inputName)}
      </label>
      `);
}
