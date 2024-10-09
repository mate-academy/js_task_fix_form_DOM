'use strict';

const fieldTexts = document.querySelectorAll('.field-text');

const changeName = function (nameCamelCase) {
  let changedName = nameCamelCase[0].toUpperCase();

  for (let i = 1; i < nameCamelCase.length; i++) {
    if (nameCamelCase[i] === nameCamelCase[i].toUpperCase()) {
      changedName += ' ' + nameCamelCase[i].toLowerCase();

      continue;
    }

    changedName += nameCamelCase[i];
  }

  return changedName;
};

for (const fieldText of fieldTexts) {
  const idFromField = fieldText.getAttribute('id');
  const nameFromField = fieldText.getAttribute('name');
  const label = document.createElement('label');

  const editName = changeName(nameFromField);

  label.classList.add('field-label');
  label.setAttribute('for', idFromField);
  label.textContent = editName;
  fieldText.before(label);

  fieldText.setAttribute('placeholder', editName);
}
