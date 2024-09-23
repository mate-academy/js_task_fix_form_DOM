'use strict';

const labelsElements = [];
const inputElements = document.querySelectorAll('.field-text');

for (const element of inputElements) {
  const placeholder =
    element.name.split('')[0].toUpperCase() + element.name.slice(1);

  element.setAttribute('placeholder', placeholder);

  const label = document.createElement('label');

  label.setAttribute('for', element.id);
  label.innerHTML = element.name.toUpperCase();
  label.classList.add('field-label');

  labelsElements.push(label);
}

const fieldElements = document.querySelectorAll('.field');

let i = 0;

for (const element of fieldElements) {
  element.append(labelsElements[i]);
  i++;
}
