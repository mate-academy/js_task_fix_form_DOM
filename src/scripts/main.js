'use strict';

const inputElements = document.querySelectorAll('input');

inputElements.forEach(function(inputElement) {
  const labelElement = document.createElement('label');

  labelElement.setAttribute('for', inputElement.id);

  let text = '';

  for (let i = 0; i < inputElement.name.length; i++) {
    if (inputElement.name[i] === inputElement.name[i].toUpperCase()
      && i !== 0) {
      text += ' ';
    }
    text += inputElement.name[i];
  }

  labelElement.textContent = text;
  inputElement.parentNode.insertBefore(labelElement, inputElement);
  labelElement.classList.add('field-label');

  const newStr = labelElement.textContent[0].toUpperCase()
    + labelElement.textContent.slice(1);

  inputElement.placeholder = newStr;
});
