'use strict';

const collectionInput = [...document.querySelectorAll('input')];

const makeRightNames = (inputName) => {
  let names = inputName[0].toUpperCase();

  for (let i = 1; i < inputName.length; i += 1) {
    if (inputName[i] === inputName[i].toUpperCase()) {
      names += ' ';
    }

    names += inputName[i];
  }

  return names;
};

collectionInput.forEach((input) => {
  const label = document.createElement('label');
  const capitalizedName = input.name[0].toUpperCase() + input.name.slice(1);

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = makeRightNames(input.name);
  input.placeholder = makeRightNames(capitalizedName);
  input.parentElement.append(label);
});
