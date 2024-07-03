'use strict';

const inputTakeName = (el) => {
  const inputName = el.querySelector('input');
  let wordCapitalized = '';

  if (inputName && inputName.hasAttribute('name')) {
    wordCapitalized = inputName.getAttribute('name');
  }

  const indexLetterUpperCase = wordCapitalized.search(/[A-Z]/);

  if (indexLetterUpperCase !== -1) {
    const firstWord = wordCapitalized.slice(0, indexLetterUpperCase);
    const secondWord = wordCapitalized
      .slice(indexLetterUpperCase)
      .toLowerCase();

    wordCapitalized = `${firstWord} ${secondWord}`;
  }

  if (wordCapitalized) {
    return wordCapitalized.charAt(0).toUpperCase() + wordCapitalized.slice(1);
  }

  return wordCapitalized || null;
};

const fieldElements = document.querySelectorAll('.field');

fieldElements.forEach((element) => {
  const label = document.createElement('label');
  const inputElementName = inputTakeName(element);
  const inputElement = element.querySelector('input');

  if (inputElement) {
    label.textContent = inputElementName;
    inputElement.setAttribute('placeholder', inputElementName);
  } else {
    label.textContent = 'Input';
    inputElement.setAttribute('placeholder', 'input');
  }

  label.classList.add('field-label');

  element.insertBefore(label, element.firstChild);
});
