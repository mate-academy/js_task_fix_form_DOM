'use strict';

const inputFields = document.querySelectorAll('input');

for (const inputs of inputFields) {
  const labelTag = document.createElement('label');
  const capitalize = string => string[0].toUpperCase() + string.slice(1);

  labelTag.className = 'field-label';
  labelTag.setAttribute('for', inputs.id);
  labelTag.innerText = capitalize(inputs.name);
  inputs.placeholder = capitalize(inputs.name);

  inputs.before(labelTag);
};
