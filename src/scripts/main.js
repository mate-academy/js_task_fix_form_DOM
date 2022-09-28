'use strict';

const inputs = [...document.querySelectorAll('input')];
const item = document.createElement('label');

item.className = 'field-label';

inputs.forEach(input => {
  let newName = input.name.toLowerCase();

  if (newName.includes('name')) {
    newName = newName
      .slice(0, newName.indexOf('name'));
    newName += ' name';
  }

  const newPlaceholder = newName
    .replace(newName[0], newName[0].toUpperCase());

  item.htmlFor = input.id;
  item.innerText = newName.toUpperCase();
  input.before(item.cloneNode(true));
  input.placeholder = newPlaceholder;
});
