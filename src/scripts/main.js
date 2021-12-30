'use strict';

const inputs = document.querySelectorAll('input');

for (let i = 0; i < inputs.length; i++) {
  const newEl = document.createElement('label');

  newEl.className = 'field-label';
  newEl.htmlFor = inputs[i].id;

  const nameForReplace = inputs[i].name.split(/(?=[A-Z])/).join(' ');

  newEl.textContent = nameForReplace;

  inputs[i].placeholder
    = nameForReplace.charAt(0).toUpperCase()
    + nameForReplace.slice(1);

  const thisParent = (inputs[i].parentElement);

  thisParent.append(newEl);
}
