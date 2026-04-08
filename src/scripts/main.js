'use strict';

const allInputs = document.querySelectorAll('input');

function camelToTitleCase(string) {
  return string
    .replace(/([A-Z])/g, ' $1')
    .replace(/[A-Z]/g, (match) => match.toLowerCase())
    .replace(/^./, (str) => str.toUpperCase());
}

allInputs.forEach((element) => {
  const labelName = document.createElement('label');

  const formatedName = camelToTitleCase(element.name);

  element.setAttribute('placeholder', formatedName);

  labelName.textContent = formatedName;
  labelName.setAttribute('for', element.id);
  labelName.setAttribute('class', 'field-label');
  element.before(labelName);
});
