'use strict';

class Label {
  constructor(id, inputName) {
    const newLabel = document.createElement('label');

    newLabel.className = 'field-label';
    newLabel.htmlFor = id;
    newLabel.textContent = inputName.toUpperCase();

    return newLabel;
  }
}

const fields = [...document.querySelectorAll('.field')];

for (const field of fields) {
  const input = field.children[0];
  let inputName = input.name.split('');

  inputName[0] = inputName[0].toUpperCase();
  inputName = inputName.join('');

  input.placeholder = inputName;

  const inputLabel = new Label(input.id, inputName);

  field.insertBefore(inputLabel, input);
}
