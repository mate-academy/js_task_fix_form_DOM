'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  input.insertAdjacentHTML('beforebegin',
    `<label class="field-label" for="${input.id}">
        ${splitWords(input.name)}
    </label>`
  );

  input.placeholder = input.name[0].toUpperCase()
    + splitWords(input.name.slice(1));
}

function splitWords(word) {
  return word.replace(/[A-Z]/g, ' $&');
}
