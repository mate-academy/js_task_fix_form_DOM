'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const labelCreator = document.createElement('label');
  const nameSpaceReplacer = input.name.replace(/Name/, ' Name');

  labelCreator.className = 'field-label';
  labelCreator.htmlFor = input.id;
  labelCreator.textContent = nameSpaceReplacer;
  input.before(labelCreator);

  input.placeholder = nameSpaceReplacer[0].toUpperCase()
    + nameSpaceReplacer.slice(1);
}
