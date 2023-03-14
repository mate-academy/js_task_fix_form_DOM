'use strict';

const divClassField = document.querySelectorAll('.field');

divClassField.forEach(label => {
  const labelTag = document.createElement('label');

  labelTag.className = 'field-label';
  label.prepend(labelTag);

  const elementId = label.lastElementChild.id;

  const lastElement = label.lastElementChild;
  const firstElement = label.firstElementChild;

  firstElement.setAttribute('for', elementId);

  const elementName = lastElement.name;

  firstElement.textContent = elementName;

  const uppercasedElementName = toUppercase(elementName);

  lastElement.setAttribute('placeholder', uppercasedElementName);
});

function toUppercase(elementName) {
  const uppercased = elementName.charAt(0).toUpperCase() + elementName.slice(1);

  return uppercased;
}
