'use strict';

const transformName = (attrName) => {
  const firstLetter = attrName[0].toUpperCase();
  const match = attrName.match(/[A-Z]/);

  if (match) {
    const index = attrName.indexOf(match[0]);

    return `${firstLetter}${attrName.slice(1, index)} ${attrName.slice(index)}`;
  } else {
    return `${firstLetter}${attrName.slice(1)}`;
  }
};

const fields = [...document.querySelectorAll('.field')];

fields.forEach((field) => {
  const input = field.querySelector('.field-text');
  const label = document.createElement('label');
  const labelName = transformName(input.getAttribute('name'));

  input.setAttribute('placeholder', labelName);
  label.setAttribute('for', input.getAttribute('id'));
  label.classList.add('field-label');
  label.textContent = labelName;

  field.prepend(label);
});
