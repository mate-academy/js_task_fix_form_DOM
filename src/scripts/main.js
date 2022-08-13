'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  let nameWithSpace = '';

  for (const letter of input.name) {
    letter === letter.toUpperCase()
      ? nameWithSpace += ' ' + letter
      : nameWithSpace += letter;
  }

  input.insertAdjacentHTML(
    'beforebegin',

    `<label for="${input.id}" class="field-label">
      ${nameWithSpace}
    </label>`
  );

  input.placeholder = nameWithSpace[0].toUpperCase() + nameWithSpace.slice(1);
}
