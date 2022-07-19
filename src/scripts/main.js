'use strict';

const forms = document.querySelectorAll('form');

for (const form of forms) {
  for (const element of form) {
    if (element.name) {
      element.setAttribute('placeholder', splitter(capitalize(element.name)));

      const label = document.createElement('label');

      label.classList.add('field-label');
      label.setAttribute('for', element.id);
      label.textContent = splitter(element.name);
      element.parentElement.append(label);
    }
  }
}

function capitalize(element) {
  return element.charAt(0).toUpperCase() + element.slice(1);
}

function splitter(element) {
  return element.split(/(?=[A-Z])/).join(' ');
}
