'use strict';

const inputs = document.querySelectorAll('input');

function addSpaces(string) {
  const splittedName = string.split('');

  for (let i = 0; i < splittedName.length; i++) {
    if (splittedName[i] === splittedName[i].toUpperCase()) {
      splittedName[i] = ` ${splittedName[i]}`;
    }
  }

  return splittedName.join('');
}

[...inputs].forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;

  label.textContent = addSpaces(input.name)[0].toUpperCase()
  + addSpaces(input.name).slice(1).toUpperCase();

  input.placeholder = addSpaces(input.name)[0].toUpperCase()
  + addSpaces(input.name).slice(1);

  input.parentElement.append(label);
});
