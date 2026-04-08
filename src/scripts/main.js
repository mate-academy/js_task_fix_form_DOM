'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';

  const id = input.id;

  label.htmlFor = id;

  const inputName = input.name;

  const text = inputName[0].toUpperCase()
  + inputName.slice(1).replace(/([A-Z])/g, ' $1');

  input.setAttribute('placeholder', text);
  label.textContent = text;
  input.parentElement.append(label);
};
