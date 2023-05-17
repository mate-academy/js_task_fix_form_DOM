'use strict';

const inputElements = document.querySelectorAll('input');

inputElements.forEach(function(inputElement) {
  const labelElement = document.createElement('label');

  labelElement.setAttribute('for', inputElement.id);
  labelElement.textContent = inputElement.name;
  inputElement.parentNode.insertBefore(labelElement, inputElement);
  labelElement.classList.add('field-label');

  const newStr = labelElement.textContent[0].toUpperCase()
    + labelElement.textContent.slice(1);

  inputElement.placeholder = newStr;
});
