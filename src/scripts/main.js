'use strict';

const inputsCollection = document.querySelectorAll('.field-text');

for (const element of inputsCollection) {
  const label = document.createElement('label');
  const normalizeName = element.name.replace(/Name/, ' Name');

  label.textContent = normalizeName;
  label.className = 'field-label';
  label.htmlFor = element.id;
  element.before(label);

  element.placeholder = normalizeName[0].toUpperCase() + normalizeName.slice(1);
}
