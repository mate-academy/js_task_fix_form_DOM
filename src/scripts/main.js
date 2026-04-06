'use strict';

// write code here
const inputs = document.getElementsByClassName('field');

function makeUpperCase(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

[...inputs].map(div => {
  const item = document.createElement('label');
  const input = div.children[0];
  const itemName = input.name.replace(/([a-z])([A-Z])/g, '$1 $2');

  item.className = 'field-label';
  item.htmlFor = input.id;
  item.textContent = itemName;
  input.placeholder = makeUpperCase(itemName);

  div.append(item);
});
