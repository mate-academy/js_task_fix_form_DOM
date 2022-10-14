'use strict';

const inputs = [...document.querySelectorAll('input')];
const labelItem = document.createElement('label');

labelItem.className = 'field-label';

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
  labelItem.htmlFor = input.id;
  labelItem.innerText = newName.join('');
  input.before(labelItem.cloneNode(true));
  input.placeholder = newName.join('');
});
