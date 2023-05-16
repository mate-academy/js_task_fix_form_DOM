'use strict';

const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;

  let startName = input.name[0].toUpperCase();
  const inputName = input.name;

  for (let i = 1; i < inputName.length; i++) {
    if (inputName[i] === inputName[i].toUpperCase()) {
      startName += ' ';
    }

    startName += inputName[i];
  }

  label.innerHTML = startName;

  input.before(label);

  input.setAttribute('placeholder', `${startName}`);
}
