'use strict';

// write code here
const inputs = [...document.querySelectorAll('input')];

for (let i = 0; i < inputs.length; i++) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = inputs[i].getAttribute('id');
  label.textContent = inputs[i].getAttribute('name');

  const placeholder = capitalize(inputs[i].getAttribute('name'));

  inputs[i].placeholder = placeholder;

  inputs[i].parentElement.append(label);
}

function capitalize(str) {
  let resultStr = str;

  resultStr = resultStr.split('').map(char => char.toLowerCase());
  resultStr[0] = resultStr[0].toUpperCase();

  return resultStr.join('');
}
