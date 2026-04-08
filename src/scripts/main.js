'use strict';

const inputs = document.querySelectorAll('input');

const inputModifier = (initialName) => {
  let newName = `${initialName[0].toUpperCase()}`;

  for (let i = 1; i < initialName.length; i += 1) {
    const char = initialName[i];

    if (char.toUpperCase() === char) {
      newName += ` ${char}`;
      continue;
    }

    newName += char;
  }

  return newName;
};

inputs.forEach((input) => {
  const newLabel = document.createElement('label');
  const newLabelId = input.id;
  const newLabelName = inputModifier(input.name);

  newLabel.classList.add('field-label');
  newLabel.htmlFor = newLabelId;
  newLabel.textContent = newLabelName;
  input.parentElement.insertAdjacentElement('afterbegin', newLabel);

  input.placeholder = `Please write ${newLabelName}`;
});
