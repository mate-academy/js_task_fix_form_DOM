'use strict';

const list = [...document.querySelectorAll('input')];

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const transformName = (sourceName) => {
  const sourceNameArr = sourceName.split(/(?=[A-Z])/);

  sourceNameArr.forEach((word, index) => {
    sourceNameArr[index] = capitalizeFirstLetter(word.toLowerCase());
  });

  return sourceNameArr.join(' ');
};

const createLabel = (input) => {
  const label = document.createElement('label');

  label.textContent = transformName(input.name);
  label.className = 'field-label';
  label.setAttribute('for', input.id);
  input.insertAdjacentElement('beforebegin', label);
};

const setPlaceholder = (input) => {
  const inputName = transformName(input.name);

  input.placeholder = capitalizeFirstLetter(inputName);
};

for (const input of list) {
  createLabel(input);
  setPlaceholder(input);
}
