'use strict';

const capitalize = (str) => {
  return str.replace(/([A-Z]+)/g, ' $1').toLowerCase();
};

const allInputs = [ ...document.querySelectorAll('input') ];

for (const item of allInputs) {
  const elementLabel = document.createElement('label');

  item.placeholder = capitalize(item.name);
  elementLabel.textContent = capitalize(item.name);
  elementLabel.classList.add('field-label');
  elementLabel.setAttribute('for', item.id);
  item.parentElement.prepend(elementLabel);
}
