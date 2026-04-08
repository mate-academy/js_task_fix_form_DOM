'use strict';

function addingPlaceholderAndLabel(element, index, arr) {
  const elementLabel = document.createElement('label');

  if (element.name) {
    element.placeholder =
      element.name.charAt(0).toUpperCase() + element.name.slice(1);
  }

  elementLabel.className = 'field-label';

  if (!element.id && element.name) {
    elementLabel.htmlFor = element.name;
  }

  elementLabel.htmlFor = element.id;
  elementLabel.textContent = element.name.toUpperCase();
  element.parentElement.prepend(elementLabel);
}

const allInputs = [...document.querySelectorAll('form input')];

allInputs.forEach(addingPlaceholderAndLabel);
