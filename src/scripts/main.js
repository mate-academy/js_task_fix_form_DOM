'use strict';

const inputsList = [...document.querySelectorAll('input')];

for (let i = 0; i < inputsList.length; i++) {
  const lable = document.createElement('label');
  const inputName = styledName(inputsList[i].name).toUpperCase();

  let placeholderName = styledName(inputsList[i].name);

  placeholderName = placeholderName
    .slice(0, 1).toUpperCase() + placeholderName.slice(1);

  lable.className = 'field-label';
  lable.htmlFor = inputsList[i].id;
  lable.textContent = inputName;

  inputsList[i].placeholder = placeholderName;
  inputsList[i].parentElement.append(lable);
}

function styledName(word) {
  const splitedName = word.split('');
  let properlyName = '';

  for (let i = 0; i < splitedName.length; i++) {
    if (splitedName[i].toUpperCase() === splitedName[i]) {
      properlyName += ' ';
    }

    properlyName += splitedName[i];
  }

  return properlyName;
}
