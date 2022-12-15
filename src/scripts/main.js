'use strict';

// write code here
const fieldsForms = document.querySelectorAll('.field');

fieldsForms.forEach(field => {
  const list = [...field.children];

  field.children[0]
    .setAttribute('placeholder', `${list[0].attributes.name.value}`);

  const label = document.createElement('label');

  label.setAttribute('for', `${list[0].attributes.id.value}`);
  label.textContent = `${list[0].attributes.name.value}`;
  field.prepend(label);
});
