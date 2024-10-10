'use strict';

const fields = [...document.querySelectorAll('input.field-text')];

fields.forEach((field) => {
  const label = document.createElement('label');
  const fieldName = field.name;

  const index = fieldName.split('').findIndex((ch) => ch === ch.toUpperCase());
  const indexEnd = index;

  const placeholderText =
    index > 0
      ? field.name[0].toUpperCase() +
        field.name.slice(1, indexEnd) +
        ' ' +
        field.name.slice(indexEnd)
      : field.name[0].toUpperCase() + field.name.slice(1);

  label.classList.add('field-label');
  label.setAttribute('for', field.id);
  label.textContent = placeholderText;
  field.setAttribute('placeholder', placeholderText);
  field.before(label);
});
