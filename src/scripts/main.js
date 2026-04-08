'use strict';

// write code here
const inputElements = document.querySelectorAll('.field-text');


inputElements.forEach((element) => {
  const inputAtrrName = element.getAttribute('name'); // З кожно input беремо атрибут name
  const inputAtrrId = element.getAttribute('id');

  const inputLabel = document.createElement('label'); // створюємо елемент label

  inputLabel.classList.add('field-label');
  inputLabel.setAttribute('for', inputAtrrId);
  element.setAttribute('placeholder', inputAtrrName.toUpperCase());


  inputLabel.textContent = inputAtrrName;

  element.before(inputLabel);
});

console.log(inputElements);

