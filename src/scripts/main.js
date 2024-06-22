'use strict';

document.querySelectorAll('.field-text').forEach((elem) => {
  const nameAttr = elem.getAttribute('name');
  const idAttr = elem.getAttribute('id');
  const lableElement = document.createElement('label');

  lableElement.setAttribute('for', idAttr);
  lableElement.textContent = convertToSeparatedWords(nameAttr).toUpperCase();
  lableElement.classList.add('field-label');

  elem.setAttribute(
    'placeholder',
    firstLetterCap(convertToSeparatedWords(nameAttr)),
  );
  elem.before(lableElement);
});

function firstLetterCap(word) {
  let sepWord = convertToSeparatedWords(word);

  sepWord = sepWord.replace(/ ([A-Z])/g, (match) => match.toLowerCase());

  return sepWord.slice(0, 1).toUpperCase() + sepWord.slice(1);
}

function convertToSeparatedWords(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2');
}
