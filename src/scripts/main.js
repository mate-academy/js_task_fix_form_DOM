'use strict';

// write code here
const fieldsForms = document.querySelectorAll('.field');

fieldsForms.forEach(field => {
  const list = [...field.children];
  const capitalize = str =>
    str.slice(0, 1).toUpperCase() + str.slice(1).split(/(?=[A-Z])/).join(' ');

  field.children[0].setAttribute('placeholder',
    `${capitalize(list[0].attributes.name.value)}`);

  const label = document.createElement('label');

  label.setAttribute('for', `${list[0].attributes.id.value}`);
  label.className = 'field-label';
  label.textContent = `${capitalize(list[0].attributes.name.value)}`;
  field.prepend(label);
});
