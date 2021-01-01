'use strict';

const inputs = [...document.getElementsByTagName('input')];

for (let i = 0; i < inputs.length; i++) {
  const label = document.createElement('label');

  label.classList.add('field-label');

  label.htmlFor = `${inputs[i].id}`;
  label.textContent = `${inputs[i].name}`;
  inputs[i].placeholder = `${inputs[i].name}`;

  inputs[i].before(label);
}
