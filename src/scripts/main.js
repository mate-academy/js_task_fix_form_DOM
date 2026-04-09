'use strict';

const collectionOfInputs = [...document.querySelectorAll('input')];

collectionOfInputs.map((element) => {
  const splitedName = splitCamelCase(element.name);
  const nameForPlaceHolder =
    splitedName.charAt(0).toUpperCase() +
    splitedName.slice(1, splitedName.length);

  element.insertAdjacentHTML(
    'beforebegin',
    `<label class='field-label' for=${element.id}>${splitedName.toUpperCase()}</label>`,
  );
  element.setAttribute('placeholder', nameForPlaceHolder);
});

function splitCamelCase(str) {
  let resultStr = '';

  for (const letter of str) {
    if (letter.toLowerCase() !== letter) {
      resultStr += ' ' + letter;
    } else {
      resultStr += letter;
    }
  }

  return resultStr;
}
