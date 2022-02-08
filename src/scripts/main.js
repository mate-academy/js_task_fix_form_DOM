'use strict';

const inputsArr = Array.from(document.getElementsByTagName('input'));

for (const element of inputsArr) {
  const label = document.createElement('label');

  const parrentElem = element.parentElement;

  parrentElem.insertBefore(label, element);
  label.className = 'field-label';
  label.textContent = element.attributes.name.nodeValue;

  element.setAttribute('placeholder', `${
    label.textContent.charAt(0).toUpperCase() + label.textContent.slice(1)}`);

  const forAttr = element.attributes.id.nodeValue;

  label.setAttribute('for', `${forAttr}`);
};
