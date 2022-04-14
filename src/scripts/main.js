'use strict';

const fields = [...document.querySelectorAll('.field')];

for (const field of fields) {
  const input = field.firstElementChild;

  const check = nameAttribute => {
    if (nameAttribute === 'firstName') {
      return 'FIRST NAME';
    }

    if (nameAttribute === 'lastName') {
      return 'LAST NAME';
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
