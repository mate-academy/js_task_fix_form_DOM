'use strict';

const input = [...document.querySelectorAll('.field-text')];

function capitalize(str) {
  const newArr = [...str];
  const indexOfCapitalize = newArr.findIndex(function(el) {
    if (el === el.toUpperCase()) {
      return true;
    }
  });

  const newStr = str[0].toUpperCase()
  + str.slice(1, indexOfCapitalize) + ' '
  + str.slice(indexOfCapitalize);

  const oldStr = str[0].toUpperCase() + str.slice(1);

  return indexOfCapitalize > -1 ? newStr : oldStr;
}

for (let i = 0; i < input.length; i++) {
  const label = document.createElement('label');

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', `${input[i].id}`);
  label.textContent = capitalize(input[i].name).toUpperCase();

  input[i].setAttribute('placeholder',
    `${capitalize(input[i].name)}`);
  input[i].before(label);
}
