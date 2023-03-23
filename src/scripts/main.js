'use strict';

const splitStr = str => {
  const firstPart = str.slice(0, -4);
  const secondPart = str.slice(-4);

  return firstPart + ' ' + secondPart;
};

const capitalizeFirstLetter = str => {
  const firstLetter = str[0].toUpperCase();
  const secondPart = str.slice(1);
  const result = firstLetter + secondPart;

  return str.includes('Name')
    ? splitStr(result)
    : result;
};

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = input.name.includes('Name')
    ? splitStr(input.name)
    : input.name;
  input.setAttribute('placeholder', capitalizeFirstLetter(input.name));

  input.before(label);
});
