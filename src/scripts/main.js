'use strict';

const inputs = [...document.querySelectorAll('input')];
const item = document.createElement('label');

item.className = 'field-label';

inputs.forEach(input => {
  const newName = input.name.split('');
  let newWordIndex;

  do {
    newWordIndex = newName.findIndex(char => char.toLowerCase() !== char);

    if (newWordIndex !== -1) {
      newName.splice(newWordIndex, 1, ' ', newName[newWordIndex].toLowerCase());
    }
  } while (newWordIndex !== -1);

  newName[0] = newName[0].toUpperCase();
  item.htmlFor = input.id;
  item.innerText = newName.join('').toUpperCase();
  input.before(item.cloneNode(true));
  input.placeholder = newName.join('');
});
