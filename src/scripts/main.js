'use strict';

const fields = [...document.querySelectorAll('.field')];
const toUpper = attributeName => {
  let separator;

  const newName = attributeName[0].toUpperCase() + attributeName.slice(1);

  for (const letter of attributeName) {
    if (letter === letter.toUpperCase()) {
      separator = letter;
    }
  }

  if (separator) {
    return newName.split(separator).join(` ${separator}`);
  }

  return newName;
};

fields.forEach(field => {
  const input = field.firstElementChild;
  const label = document.createElement('label');

  input.placeholder = `${toUpper(input.name)}`;

  label.className = 'field-label';
  label.htmlFor = `${input.id}`;
  label.textContent = `${toUpper(input.name)}`;

  field.append(label);
});
