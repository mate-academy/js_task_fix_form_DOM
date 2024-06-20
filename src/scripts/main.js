'use strict';

const inputs = [...document.querySelectorAll('form input')];

/**
 * @function getUpperCaseWord
 * @param {string} word;
 * @returns {string}
 */
const getUpperCaseWord = (word) => word[0].toUpperCase() + word.slice(1);

/**
 * @function getStringFormat
 * @param {string} str
 * @returns {string}
 */
function getWithCapitalLetter(str) {
  for (const ch of str) {
    const isUpperCaseLetter = ch !== ch.toLowerCase();

    if (isUpperCaseLetter) {
      return str
        .replace(ch, ` ${ch}`)
        .split(' ')
        .map(getUpperCaseWord)
        .join(' ');
    }
  }

  return getUpperCaseWord(str);
}

/**
 * @function addedLabelElement
 * @param {Element[]} arrayOfInputs;
 * @returns {void}
 */
const addedLabelElement = (arrayOfInputs) => {
  arrayOfInputs.forEach((input) => {
    const labelElement = document.createElement('label');

    labelElement.htmlFor = input.id;
    labelElement.classList.add('field-label');
    labelElement.innerText = getWithCapitalLetter(input.name);

    input.placeholder = getWithCapitalLetter(input.name);
    input.parentElement.prepend(labelElement);
  });
};

addedLabelElement(inputs);
