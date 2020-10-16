'use strict';

const inputs = document.getElementsByTagName('input');

for (let i = 0; i < [...inputs].length; i++) {
  const labels = document.createElement('label');
  const inputsId = inputs[i].id;
  const inputsName = inputs[i].name;

  labels.className = 'field-label';
  labels.htmlFor = inputsId;
  labels.textContent = inputsName;
  inputs[i].placeholder = inputsName;

  inputs[i].placeholder = inputs[i].placeholder[0].toUpperCase()
    + inputs[i].placeholder.slice(1);

  inputs[i].parentElement.append(labels);
}
