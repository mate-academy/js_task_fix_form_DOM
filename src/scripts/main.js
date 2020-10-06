'use strict';

const fields = document.querySelectorAll('.field');
const labelTemplate = document.createElement('label');

labelTemplate.className = 'field-label';

for (const field of fields) {
  const lable = labelTemplate.cloneNode();
  const input = field.lastElementChild;
  const inputName = formatInputName(input.getAttribute('name'));

  lable.textContent = inputName;
  lable.htmlFor = input.id;

  input.setAttribute('placeholder', capitalizInputName(inputName));
  field.append(lable);
}

function formatInputName(str) {
  const capitalIndex = [...str].findIndex(char => char.codePointAt(0) < 91);

  if (capitalIndex < 0) {
    return str;
  }

  return str.slice(0, capitalIndex) + ' ' + str.slice(capitalIndex);
}

function capitalizInputName(str) {
  const capitalLetterStr = str.split(' ').map(word => {
    return word[0].toUpperCase() + word.slice(1);
  });

  return capitalLetterStr.join(' ');
}
