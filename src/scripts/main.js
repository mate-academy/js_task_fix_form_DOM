'use strict';

const formNodeList = document.querySelectorAll('.field-text');

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function placeholderImplementator(list, attrName) {
  for (const element of list) {
    const value = element.name;

    element.setAttribute(attrName, capitalize(value));
  }
}

function labelImplementator(list) {
  for (const element of list) {
    const label = document.createElement('label');

    label.setAttribute('class', 'field-label');
    label.setAttribute('for', element.id);
    label.textContent = element.name;

    element.parentNode.prepend(label);
  }
}

placeholderImplementator(formNodeList, 'placeholder');
labelImplementator(formNodeList);
