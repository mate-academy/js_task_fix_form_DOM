function createLabel(forAttribute, textNodeChild) {
  const label = document.createElement('label');

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', forAttribute);
  label.appendChild(document.createTextNode(textNodeChild));

  return label;
}

const allFields = [
  ...document.querySelectorAll('body div form')[0].querySelectorAll('.field'),
  ...document.querySelectorAll('body div form')[1].querySelectorAll('.field'),
];

allFields.forEach((field) => {
  const fieldId = field.lastElementChild.id;
  let fieldName = field.lastElementChild.name.match(/([a-z]+|[A-Z]{1}[a-z]*)/g);

  fieldName[0] = fieldName[0].at(0).toUpperCase() + fieldName[0].slice(1);
  fieldName = fieldName.join(' ');

  field.lastElementChild.setAttribute('placeholder', fieldName);

  const toAdd = createLabel(fieldId, fieldName);

  field.prepend(toAdd);
});
