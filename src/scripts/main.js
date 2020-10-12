'use strict';

const inputs = [...document.querySelectorAll('.field-text')];

function createLabel(list) {
  for (const item of list) {
    const label = document.createElement('label');

    label.classList.add('field-label');
    label.htmlFor = item.id;
    label.textContent = item.name;

    item.parentElement.appendChild(label);

    const placeholder = item.name[0].toUpperCase() + item.name.slice(1);

    item.placeholder = placeholder;
  }
}

createLabel(inputs);
