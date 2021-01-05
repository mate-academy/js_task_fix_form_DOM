'use strict';

const wrapper = document.querySelectorAll('.field');

for (const item of wrapper) {
  const inputName = item.children[0].name;

  const textPlaceholder = inputName.split('').map((letter, index) => {
    return letter === letter.toUpperCase()
      ? ' ' + letter
      : index === 0
        ? letter.toUpperCase()
        : letter;
  }).join('');

  item.children[0].placeholder = textPlaceholder;

  item.insertAdjacentHTML('afterbegin', `
      <label class="field-label" for="${item.children[0].id}">
      ${inputName}
      </label>
      `);
}
