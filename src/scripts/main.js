'use strict';

const allInputs = document.querySelectorAll('input');
const allFields = document.querySelectorAll('.field');

allFields.forEach((field) => field.insertAdjacentHTML('afterbegin', '<label>'));

const allLabels = document.querySelectorAll('label');

for (let i = 0; i < allInputs.length; i++) {
  allInputs[i].setAttribute(
    'placeholder',
    `${allInputs[i].name.toUpperCase()}`,
  );
  allLabels[i].textContent = allInputs[i].name;
  allLabels[i].setAttribute('class', 'field-label');
  allLabels[i].setAttribute('for', `${allInputs[i].id}`);
}
