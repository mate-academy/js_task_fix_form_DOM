'use strict';

const getLabelElement = (name, attributes, classes) => {
  const labelElement = document.createElement(name);

  labelElement.setAttribute('name', name);
  labelElement.setAttribute('for', attributes.id);
  labelElement.textContent = attributes.name.toUpperCase();
  labelElement.classList.add(classes);

  return labelElement;
}

const fields = document.querySelectorAll('.field-text')

fields.forEach(field => {
  const fieldAttributeName = field.getAttribute('name')
  const labelElement = getLabelElement(
      'label',
      {
        id: field.getAttribute('id'),
        name: fieldAttributeName
      },
      'field-label')

  field.before(labelElement)

  field.setAttribute('placeholder', fieldAttributeName.toLowerCase())
})
