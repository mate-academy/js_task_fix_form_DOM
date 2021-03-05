'use strict';

// write code here
const formInputs = document.body.querySelectorAll('.field-text');

formInputs.forEach(input => {
  input.insertAdjacentHTML('beforebegin',
    `<label
        class="field-label"
        for="${input.id}"
     >
      ${input.name}
</label>`);

  input.placeholder = splitWords(
    input.name[0].toUpperCase() + input.name.slice(1));
});

function splitWords(word) {
  let splitedString = '';

  [...word].forEach(letter => {
    if (letter === letter.toUpperCase()) {
      splitedString += ' ' + letter;
    } else {
      splitedString += letter;
    }
  });

  return splitedString;
}
