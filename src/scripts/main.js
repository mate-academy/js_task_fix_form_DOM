'use strict';

class Label {
  constructor(id, inputName) {
    const newLabel = document.createElement('label');

    newLabel.className = 'field-label';
    newLabel.htmlFor = id;
    newLabel.textContent = inputName;

    return newLabel;
  }
}

const createSpacesBetweenWords = (char, index) => {
  if (char === char.toUpperCase() && index > 0) {
    return ` ${char}`;
  }

  return char;
};

const fields = [...document.querySelectorAll('.field-text')];

for (const field of fields) {
  const input = field;
  const inputName = input.name[0].toUpperCase() + input.name.slice(1);

  input.placeholder = inputName
    .split('')
    .map(createSpacesBetweenWords)
    .join('');

  const inputLabel = new Label(input.id, inputName);

  field.before(inputLabel, input);
}
