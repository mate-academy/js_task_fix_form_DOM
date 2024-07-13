'use strict';

function preparePlaceholderOrLabel(inputId) {
  const strToArr = inputId.split('-');

  strToArr.splice(0, 2);

  const capitalisedArr = strToArr.map((element) => {
    return element.charAt(0).toUpperCase() + element.slice(1);
  });

  return capitalisedArr.join(' ');
}

const inputArr = document.querySelectorAll('input');

inputArr.forEach((inputElement) => {
  inputElement.placeholder = preparePlaceholderOrLabel(inputElement.id);
});

const inputDiv = document.querySelectorAll('.field');

inputDiv.forEach((divElement) => {
  const input = divElement.querySelector('input');
  const label = document.createElement('label');

  label.textContent = preparePlaceholderOrLabel(input.id);
  label.classList.add('field-label');

  divElement.prepend(label);
});
