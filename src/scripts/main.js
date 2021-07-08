'use strict';

const forLabel = [ ...document.querySelectorAll('.field') ];
const allInputs = [ ...document.querySelectorAll('input') ];

for (let i = 0; i < allInputs.length; i++) {
  const elementLabel = document.createElement('label');
  const value = allInputs[i];
  const index = value.name.indexOf('N');

  elementLabel.setAttribute('for', value.id);

  value.placeholder = value.name[0].toUpperCase() + value.name.slice(1);

  if (value.placeholder.includes('N')) {
    value.placeholder = value.name[0]
      .toUpperCase() + value.name.slice(1, index)
    + ' ' + value.name.slice(index, value.name.length);
  }
  elementLabel.textContent = value.placeholder;
  elementLabel.classList.add('field-label');
  forLabel[i].append(elementLabel);
}
