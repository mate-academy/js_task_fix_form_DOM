'use strict';

// write code here
const forms = [...document.querySelectorAll('form')];

for (const form of forms) {
  addLabels(form);
}

function addLabels(form) {
  const inputs = [...form.querySelectorAll('input')];

  for (const input of inputs) {
    const label = document.createElement('label');

    label.classList.add('field-label');
    label.setAttribute('for', input.id);
    label.textContent = input.name;

    input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);

    input.before(label);
  }
}
