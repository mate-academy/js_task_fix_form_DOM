'use strict';

const inputsList = document.querySelectorAll('.field-text');

function divideWords(word) {
  let result;

  if (word.includes('Name')) {
    result = word.slice(0, -4) + ' Name';

    return result;
  }

  return word;
}

inputsList.forEach(element => {
  element.insertAdjacentHTML('beforebegin',
    `<label class="field-label" for=${element.id}>
      ${divideWords(element.name)}
    </label>`);

  element.setAttribute('placeholder',
    `${divideWords(element.name[0].toUpperCase() + element.name.slice(1))}`);
});
