'use strict';

const fields = document.querySelectorAll('.field');
const fieldsList = [...fields];

for (const element of fieldsList) {
  const inputItem = element.firstElementChild;

  const nameCapitalized = (
    inputItem.name.charAt(0).toUpperCase() + inputItem.name.substr(1)
  ).replace(/([a-z])([A-Z])/g, '$1 $2');

  inputItem.setAttribute('placeholder', nameCapitalized);

  const labelItem = document.createElement('label');

  labelItem.className = 'field-label';
  labelItem.textContent = nameCapitalized;
  labelItem.htmlFor = inputItem.id;

  element.append(labelItem);
}
