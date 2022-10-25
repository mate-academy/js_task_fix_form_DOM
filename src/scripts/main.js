'use strict';

function fixForm(form) {
  const inputs = form.querySelectorAll('input');

  for (const input of inputs) {
    addLabel(input);
    addPlaceholder(input);
  }
}

function addLabel(input) {
  input.insertAdjacentHTML('beforebegin', `
    <label for=${input.id} class='field-label'>
      ${input.name}
    </label>
  `);
}

function addPlaceholder(input) {
  const placeholder = separateWords(input.name);

  input.placeholder = placeholder[0].toUpperCase() + placeholder.slice(1);
}

function separateWords(words) {
  return words
    .split('')
    .map(letter => {
      return letter === letter.toUpperCase()
        ? ' ' + letter.toLowerCase()
        : letter;
    })
    .join('');
}

const forms = document.querySelectorAll('form');

for (const form of forms) {
  fixForm(form);
}
