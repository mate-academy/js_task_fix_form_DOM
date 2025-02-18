'use strict';

function getPlaceholderText(fieldName) {
  const firstUpperIndex = fieldName
    .split('')
    .findIndex((ch) => ch === ch.toUpperCase());
  const spaceInsertIndex = firstUpperIndex;

  if (firstUpperIndex > 0) {
    return (
      fieldName[0].toUpperCase() +
      fieldName.slice(1, spaceInsertIndex) +
      ' ' +
      fieldName.slice(spaceInsertIndex)
    );
  } else {
    return fieldName[0].toUpperCase() + fieldName.slice(1);
  }
}

const fields = [...document.querySelectorAll('input.field-text')];

fields.forEach((field) => {
  const label = document.createElement('label');
  const fieldName = field.name;

  const placeholderText = getPlaceholderText(fieldName);

  label.classList.add('field-label');
  label.setAttribute('for', field.id);
  label.textContent = placeholderText;

  field.setAttribute('placeholder', placeholderText);
  field.before(label);
});
