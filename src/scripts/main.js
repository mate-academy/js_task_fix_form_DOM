'use strict';

const inputs = [...document.querySelectorAll('input')];
const labels = createLabels(inputs);
const fields = document.querySelectorAll('.field');

addPlaceholder(inputs);
appendLabelsToFields(fields, labels);

function createLabels(inputs) {
  const labels = [];

  for (const input of inputs) {
    const newElem = document.createElement('label');

    newElem.className = 'field-label';
    newElem.id = input.id;
    newElem.textContent = input.name.toUpperCase();

    labels.push(newElem);
  }

  return labels;
}

function addPlaceholder(inputs) {
  const newInputs = [];

  for (const input of inputs) {
    input.placeholder = input.name.toUpperCase();
    newInputs.push(input);
  }

  return newInputs;
}

function appendLabelsToFields(fields, labels) {
  for (let i = 0; i < fields.length; i++) {
    fields[i].prepend(labels[i]);
  }
}
