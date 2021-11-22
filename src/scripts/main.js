'use strict';

function fillForms() {
  const inputs = document.querySelectorAll('input');

  for (const input of inputs) {
    const label = document.createElement('label');

    label.className = 'field-label';
    label.htmlFor = input.id;
    label.textContent = addTextContent(input.name);

    input.placeholder = addPlaceholder(input);
    input.before(label);
  }
}

function addTextContent(input) {
  return input.split(/(?=[A-Z])/g).join(' ');
}

function addPlaceholder(input) {
  const newPlaceholder = input.name[0].toUpperCase() + input.name.slice(1);

  return addTextContent(newPlaceholder);
}

fillForms();
