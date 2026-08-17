'use strict';

const inputs = document.querySelectorAll('input');

function createLabels() {
  for (const input of inputs) {
    const label = document.createElement('label');

    label.setAttribute('class', 'field-label');

    const id = input.getAttribute('id');

    label.setAttribute('for', id);

    const text = input.getAttribute('name');

    input.setAttribute('placeholder', text[0].toUpperCase() + text.slice(1));

    label.textContent = text[0].toUpperCase() + text.slice(1);

    const containerElement = input.parentElement;

    containerElement.append(label);
  }
}

createLabels();
