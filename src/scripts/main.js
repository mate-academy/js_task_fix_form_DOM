'use strict';

const formInputs = [...document.querySelectorAll('input')];

const createLabel = function(input) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.innerText = createTextName(input.name);

  return label;
};

function createTextName(string) {
  let result = '';

  for (let i = string.length - 1; i >= 0; i--) {
    if (i === 0) {
      result = string[i].toUpperCase() + result;
    } else {
      if (string[i].toUpperCase() === string[i]) {
        result = ' ' + string[i] + result;
      } else {
        result = string[i] + result;
      };
    };
  };

  return result;
};

const labels = formInputs.map(createLabel);

for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].parentElement.append(labels[i]);

  formInputs[i].placeholder = createTextName(formInputs[i].name);
};
