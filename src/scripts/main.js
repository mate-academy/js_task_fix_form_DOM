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

const fields = [...document.querySelectorAll('.field')];

for (const field of fields) {
  const input = field.children[0];
  const inputName = input.name[0].toUpperCase() + input.name.slice(1);

  input.placeholder = inputName;

  const inputLabel = new Label(input.id, inputName);

  field.insertBefore(inputLabel, input);
}
