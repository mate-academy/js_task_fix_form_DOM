'use strict';

function convertToNewString(string) {
  const newWord = `${string.slice(0, -4)}` + ' ' + 'Name';
  const newName = newWord.toUpperCase();

  return newName;
}

const inputs = document.querySelectorAll('input');
const listOfInputs = [...inputs];

for (const input of listOfInputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = input.name;
  label.setAttribute('for', input.id);

  input.setAttribute('placeholder', input.name.toUpperCase());

  if (input.name.includes('Name')) {
    label.textContent = convertToNewString(input.name);
    input.setAttribute('placeholder', convertToNewString(input.name));
  }

  input.parentElement.append(label);
}
