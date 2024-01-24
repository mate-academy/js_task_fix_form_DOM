'use strict';

const inputsArr = [...document.querySelectorAll('input')];

inputsArr.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;

  label.textContent = capitalizeString(input.name);

  input.placeholder = capitalizeString(input.name);

  input.parentElement.prepend(label);
});

function capitalizeString(str) {
  let string = str;
  const regex = /[A-Z]/;
  const match = string.match(regex);

  if (match) {
    const index = match.index;

    string = string.slice(0, index) + ' ' + string.slice(index);
  }

  return string.toUpperCase();
}
