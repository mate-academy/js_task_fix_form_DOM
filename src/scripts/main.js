'use strict';

const inputs = document.querySelectorAll('.field-text');

function addGap(text) {
  const result = [];
  const newText = text.split('');

  result.push(newText[0].toUpperCase());

  for (let i = 1; i < newText.length; i++) {
    if (newText[i] === newText[i].toUpperCase()) {
      result.push(' ');
    }

    result.push(newText[i]);
  }

  return result.join('');
}

for (const input of inputs) {
  input.insertAdjacentHTML('afterend',
    `<label
      for='${input.name}'
      class='field-label' >${input.name}
    </label>`
  );

  input.placeholder = addGap(input.name);
}
