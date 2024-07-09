'use strict';

const fields = document.querySelectorAll('.field');
const inputs = [...document.querySelectorAll('.field-text')];

const inputIds = inputs.map((element) => element.id);

function formatInputName(inputName) {
  const formattedName = inputName.split(/(?=[A-Z])/);

  return formattedName.join(' ').toUpperCase();
}

fields.forEach((fieldElement, index) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', inputIds[index]);
  fieldElement.insertAdjacentElement('afterbegin', label);
});

inputs.forEach((element) => {
  const placeholderValue = formatInputName(element.name);

  element.setAttribute('placeholder', placeholderValue);
});
