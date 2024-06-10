'use strict';

const fields = [...document.querySelectorAll('.field')];

fields.forEach((field) => {
  const input = field.querySelector('.field-text');
  const label = document.createElement('label');

  const attrName = input.getAttribute('name');
  const labelName = `${attrName[0].toUpperCase()}${attrName.slice(1)}`;

  input.setAttribute('placeholder', labelName);
  label.setAttribute('for', input.getAttribute('id'));
  label.classList.add('field-label');
  label.innerText = labelName;

  field.prepend(label);
});
