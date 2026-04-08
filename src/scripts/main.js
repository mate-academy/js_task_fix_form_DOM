'use strict';

const fields = [...document.querySelectorAll('input')];

fields.forEach((field) => {
  if (!field.id || !field.name) {
    return;
  }

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', field.id);
  label.innerText = field.name;

  field.before(label);

  const placeholderValue =
    field.name.charAt(0).toUpperCase() + field.name.slice(1);

  field.setAttribute('placeholder', placeholderValue);
});
