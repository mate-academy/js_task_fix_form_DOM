'use strict';

const inputs = [...document.querySelectorAll('input')];

for (let i = 0; i < inputs.length; i++) {
  const label = document.createElement('label');

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', inputs[i].id);

  label.textContent = textFormat(inputs[i].name);

  inputs[i].parentElement.prepend(label);
  inputs[i].setAttribute('placeholder', textFormat(inputs[i].name));
}

function textFormat(string) {
  let result = string[0].toUpperCase();

  for (let i = 1; i < string.length; i++) {
    result += string[i] === string[i].toUpperCase()
      ? ` ${string[i]}`
      : string[i];
  }

  return result;
};
