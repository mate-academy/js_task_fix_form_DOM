'use strict';

function preparePlaceholderOrLabel(inputId) {
  const strToArr = inputId.split('-');

  const capitalisedArr = strToArr.map((element) => {
    return element.charAt(0).toUpperCase() + element.slice(1);
  });

  let placeholder = '';

  if (capitalisedArr.length > 3) {
    placeholder = `${capitalisedArr[capitalisedArr.length - 2]} ${capitalisedArr[capitalisedArr.length - 1]}`;
  } else {
    placeholder = capitalisedArr[capitalisedArr.length - 1];
  }

  return placeholder;
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
