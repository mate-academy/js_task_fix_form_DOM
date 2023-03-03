'use strict';

const forms = document.querySelectorAll('.field');
const inputs = document.querySelectorAll('input');

function nameWithSpace(nameWithoutSpace) {
  return nameWithoutSpace.replace('N', ' N');
};

for (let i = 0; i < forms.length; i++) {
  forms[i].insertAdjacentHTML('afterbegin', `
  <label class='field-label' for='${inputs[i].id}'>
    ${nameWithSpace(inputs[i].name)}
  </label>`);

  inputs[i].placeholder = nameWithSpace(inputs[i]
    .name[0].toLocaleUpperCase() + inputs[i].name.slice(1));
};
