'use strict';

const fields = [...document.querySelectorAll('.field')];

for (const field of fields) {
  const input = field.firstElementChild;

  const check = nameAttribute => {
    let separator;

    for (const letter of nameAttribute) {
      if (letter === letter.toUpperCase()) {
        separator = letter;
      }
    }

    if (separator) {
      return nameAttribute.split(separator).join(` ${separator}`).toUpperCase();
    }

    return nameAttribute.toUpperCase();
  };

  input.placeholder = `${check(input.name)}`;

  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = `${input.id}`;
  label.textContent = `${check(input.name)}`;

  field.append(label);
}
