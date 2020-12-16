'use strict';

const blocks = document.querySelectorAll('.field');

for (const block of blocks) {
  const item = document.createElement('label');
  const nameInput = block.querySelector('input');
  const namePlaceholder = nameInput.name;

  item.className = 'field-label';
  item.htmlFor = nameInput.id;
  item.textContent = nameInput.name.toUpperCase();
  block.prepend(item);

  nameInput.placeholder = namePlaceholder.slice(0, 1).toUpperCase()
  + namePlaceholder.slice(1, namePlaceholder.length);
};
