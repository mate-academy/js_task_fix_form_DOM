'use strict';

const fieldText = document.querySelectorAll('.field-text');

for (const x of fieldText) {
  const createLabel = document.createElement('label');
  const fixedName = x.name.replace(/Name/, ' Name');

  createLabel.className = 'field-label';
  createLabel.textContent = fixedName;
  createLabel.htmlFor = x.id;
  x.before(createLabel);

  x.placeholder = fixedName[0].toUpperCase() + fixedName.slice(1);
}
