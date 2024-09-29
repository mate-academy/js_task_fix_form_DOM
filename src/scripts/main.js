'use strict';

// write code here
const inputs = document.querySelectorAll('input');

function capitalize(str) {
  const result = str;

  return result.charAt(0).toUpperCase() + result.slice(1);
}

inputs.forEach((item, ind, arr) => {
  const itemName = item.getAttribute('name');
  const itemLabel = document.createElement('label');

  itemLabel.classList.add('field-label');
  itemLabel.setAttribute('for', item.id);
  itemLabel.textContent = itemName.toUpperCase();
  item.setAttribute('placeholder', capitalize(itemName));
  item.before(itemLabel);
});
