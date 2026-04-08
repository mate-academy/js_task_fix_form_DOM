'use strict';

const bodyElement = document.body;

const allFieldForm1 = bodyElement.querySelectorAll('.field-text');

const fieldWrap = bodyElement.querySelector('.login-wrap');

fieldWrap.style.height = 'fit-content';

function addPlaceholderAndLabel(list) {
  for (const element of list) {
    const label = document.createElement('label');
    label.className = 'field-label';

    if (element.name) {
      label.textContent = element.name.toUpperCase();
      element.setAttribute('placeholder', element.name);
    } else {
      label.textContent = 'UNNAMED FIELD';
      console.warn('Element is missing name attribute:', element);
    }

    if (element.id) {
      label.setAttribute('for', element.id);
    } else {
      console.warn('Element is missing id attribute:', element);
    }

    element.before(label);

    label.style.fontWeight = '700';
    label.style.fontSize = '11px';
  }
}

addPlaceholderAndLabel(allFieldForm1);
