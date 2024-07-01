'use strict';

const allInputElement = [...document.querySelectorAll('input.field-text')];

allInputElement.forEach((element) => {
  const labelElement = document.createElement('label');

  const inputElementName =
    element.name[0].toUpperCase() + element.name.slice(1);

  labelElement.setAttribute('class', 'field-label');
  labelElement.setAttribute('for', `${element.id}`);
  labelElement.textContent = inputElementName;

  element.setAttribute('placeholder', `${inputElementName}`);

  element.insertAdjacentElement('beforebegin', labelElement);
});
