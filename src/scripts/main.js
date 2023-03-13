'use strict';

const divClassField = document.querySelectorAll('.field');

divClassField.forEach(label => {
  const labelTag = document.createElement('label');

  labelTag.className = 'field-label';
  label.prepend(labelTag);

  const elementId = label.lastElementChild.id;

  label.firstElementChild.setAttribute('for', elementId);

  const elementName = label.lastElementChild.name;

  label.firstElementChild.textContent = elementName;

  const uppercasedElementName = toUppercase(elementName);

  label.lastElementChild.setAttribute('placeholder', uppercasedElementName);
});

function toUppercase(elementName) {
  const uppercased = elementName.charAt(0).toUpperCase() + elementName.slice(1);

  return uppercased;
}
