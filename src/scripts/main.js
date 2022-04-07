'use strict';

function splitCamelCase(str) {
  const splitted = Array.from(str);

  for (let i = 0; i < splitted.length; i++) {
    const letter = splitted[i];

    if (letter === letter.toUpperCase()) {
      splitted[i] = ' ' + letter;
    }
  }

  splitted[0] = splitted[0].toUpperCase();

  return splitted.join('');
}

const labelPrototype = document.createElement('label');
const forms = document.querySelectorAll('form');

for (const form of forms) {
  const inputs = form.querySelectorAll('input');

  for (const input of inputs) {
    const label = labelPrototype.cloneNode();

    label.className = 'field-label';
    label.htmlFor = input.id;
    label.innerText = splitCamelCase(input.name);

    const inputContainer = input.closest('div');

    inputContainer.prepend(label);

    const placeholder = splitCamelCase(input.name);

    input.placeholder = placeholder;
  }
}
