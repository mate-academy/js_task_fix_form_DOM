'use strict';
const input = document.querySelectorAll('input');
const div = document.querySelectorAll('.field');

for (let i = 0; i < input.length; i++) {
  const label = document.createElement('label');
  label.className = 'field-label';
  label.setAttribute('for', input[i].id);
  label.innerHTML = input[i].name;

  const slpitName = input[i].name.split('');
  const toUpper = slpitName[0].toLocaleUpperCase();
  const rest = [...slpitName];
  rest.splice(0, 1);
  const capitalize = [toUpper, ...rest].join('');

  input[i].setAttribute('placeholder', capitalize);

  div[i].append(label);
}

console.log(div);