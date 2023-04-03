'use strict';

const allInputs = [...document.querySelectorAll('input')];

for (let i = 0; i < allInputs.length; i++) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = allInputs[i].id;
  label.textContent = separator(allInputs[i].name);

  const parentInput = allInputs[i].parentElement;

  parentInput.append(label);

  allInputs[i].placeholder = separator(allInputs[i].name);
};

function separator(str) {
  let formatedString = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      formatedString += ' ' + str[i];
    } else {
      formatedString += str[i];
    }
  }

  formatedString = formatedString.charAt(0).toUpperCase()
    + formatedString.slice(1);

  return formatedString;
};
