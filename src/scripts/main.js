'use strict';

// write code here
const inputList = document.querySelectorAll('input');

const capitalize = (inputName) => {
  const inputCapitalizeLatter = inputName.split('').map(
    letter => letter !== letter.toUpperCase() ? letter : ' ' + letter
  ).join('');

  return inputCapitalizeLatter.slice(0, 1).toUpperCase()
   + inputCapitalizeLatter.slice(1);
};

for (const input of inputList) {
  const label = document.createElement('label');

  input.placeholder = capitalize(input.name);
  label.htmlFor = input.id;
  label.textContent = capitalize(input.name);
  input.before(label);
}
