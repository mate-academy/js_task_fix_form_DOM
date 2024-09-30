'use strict';

// write code here
const inputs = document.querySelectorAll('input');

function capitalize(str) {
  const result = str;

  return result.charAt(0).toUpperCase() + result.slice(1);
}

inputs.forEach((item, ind, arr) => {
  let itemName = capitalize(item.getAttribute('name'));
  const itemLabel = document.createElement('label');

  if (itemName.toLowerCase().includes('name')) {
    itemName = itemName.slice(0, -4) + ' ' + itemName.slice(-4);
  }

  itemLabel.classList.add('field-label');
  itemLabel.setAttribute('for', item.id);
  itemLabel.textContent = itemName.toUpperCase();
  item.setAttribute('placeholder', itemName);
  item.before(itemLabel);
});
