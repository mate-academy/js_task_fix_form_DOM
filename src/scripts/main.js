'use strict';

// write code here
const inputs = Array.from(document.querySelectorAll('form div input'));
const fields = Array.from(document.querySelectorAll('.field'));

function createLabel(inputsForLabel) {
  const labels = inputsForLabel.map((input) => {
    const label = document.createElement('label');

    label.classList.add('field-label');

    label.htmlFor = input.id;

    label.textContent = input.name;

    return label;
  });

  return labels;
}

const newLabels = createLabel(inputs);

function addPlaceholders(inputsForPlaceholder) {
  inputsForPlaceholder.forEach(
    (item) =>
      (item.placeholder = item.name[0].toUpperCase() + item.name.slice(1)),
  );
}

addPlaceholders(inputs);

function addLabels(newLabel) {
  for (let i = 0; i < newLabel.length; i++) {
    const element = newLabel[i];
    const field = fields[i];

    field.appendChild(element);
  }
}

addLabels(newLabels);
