'use strict';

const inputs = [...document.querySelectorAll('.field-text')];
const fields = [...document.querySelectorAll('.field')];

for (let i = 0; i < fields.length; i++) {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', inputs[i]['id']);
  label.textContent = inputs[i]['name'];
  fields[i].append(label);

  const capitalInputName =
    inputs[i]['name'][0].toUpperCase() + inputs[i]['name'].slice(1);

  inputs[i].setAttribute('placeholder', capitalInputName);
}
