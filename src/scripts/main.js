'use strict';

const inputs = document.querySelectorAll('form input');

let counter = 1;

for (const element of inputs) {
  if (!element.name) {
    continue;
  }

  let id = element.id;

  if (!id) {
    let proposedId;
    do {
      proposedId = element.name + counter;
      counter++;
    } while (document.getElementById(proposedId));
    element.id = proposedId;
    id = proposedId;
  }

  if (document.querySelector(`label[for="${id}"]`)) {
    continue;
  }

  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', id);
  const text = element.name.charAt(0).toUpperCase() + element.name.slice(1).toLowerCase();
  label.textContent = text;
  element.placeholder = text;
  element.parentElement.insertBefore(label, element);
}
