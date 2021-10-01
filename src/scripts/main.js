'use strict';

const elements = document.querySelectorAll('.field');

for (const element of elements) {
  const nameInput = convertName(element.children[0].name);

  element.children[0].placeholder = nameInput;

  element.insertAdjacentHTML('afterbegin', `
  <label for="${element.children[0].id}"
    class="field-label">
    ${nameInput}
  </label>
`);
}

function convertName(names) {
  let result = '';

  for (let i = 0; i < names.length; i++) {
    let letter = names[i];

    if (letter === names[i].toUpperCase()) {
      result += ' ';
    };

    if (i === 0) {
      letter = names[i].toUpperCase();
    };

    result += letter;
  };

  return result;
}
