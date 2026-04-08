'use strict';

const allInputElement = [...document.querySelectorAll('input.field-text')];

function getCorrectName(string) {
  const splitedString = string.split('');

  const index = splitedString.findIndex((e) => e === e.toUpperCase());

  if (index !== -1) {
    const correctString = string.slice(0, index) + ' ' + string.slice(index);

    return correctString;
  }

  return string;
}

allInputElement.forEach((element) => {
  const labelElement = document.createElement('label');

  let inputElementName = getCorrectName(element.name);

  inputElementName =
    inputElementName[0].toUpperCase() + inputElementName.slice(1);

  labelElement.setAttribute('class', 'field-label');
  labelElement.setAttribute('for', `${element.id}`);
  labelElement.textContent = inputElementName;

  element.setAttribute('placeholder', `${inputElementName}`);

  element.insertAdjacentElement('beforebegin', labelElement);
});
