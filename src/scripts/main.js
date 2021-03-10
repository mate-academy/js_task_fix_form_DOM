'use strict';

// write code here

const inputs = document.querySelectorAll('.field-text');

function splitWord(word) {
  return word.replace(/[A-Z]/g, ' $&');
}

for (const input of inputs) {
  input.insertAdjacentHTML('beforebegin',
    `<label class="field-label" for="${input.id}">
        ${splitWord(input.name)}
    </label>`
  );

  input.placeholder = input.name[0].toUpperCase()
    + splitWord(input.name.slice(1));
}
