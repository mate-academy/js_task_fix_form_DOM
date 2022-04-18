'use strict';

const fields = [...document.querySelectorAll('.field')];

fields.forEach(field => {
  const input = field.firstElementChild;
  const label = document.createElement('label');

  const toUpper = attributeName => {
    let separator;

    for (const letter of attributeName) {
      if (letter === letter.toUpperCase()) {
        separator = letter;
      }
    }

    if (separator) {
      return attributeName.split(separator).join(` ${separator}`).toUpperCase();
    }

    return attributeName.toUpperCase();
  };

  input.placeholder = `${toUpper(input.name)}`;

  label.className = 'field-label';
  label.htmlFor = `${input.id}`;
  label.textContent = `${toUpper(input.name)}`;

  field.append(label);
});
