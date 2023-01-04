'use strict';

function convertToNewString(string) {
  const newWord = `${string.slice(0, -4)}` + ' ' + 'name';
  const newName = newWord;

  return newName;
}

function capitalize(string) {
  const letters = string.split('');

  return letters[0].toUpperCase() + letters.slice(1).join('');
}

const inputs = document.querySelectorAll('input');
const listOfInputs = [...inputs];

for (const input of listOfInputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = input.name;
  label.setAttribute('for', input.id);

  input.setAttribute('placeholder', capitalize(input.name));

  if (input.name.includes('Name')) {
    label.textContent = convertToNewString(input.name);

    const capWord = capitalize(input.name);

    input.setAttribute('placeholder', convertToNewString(capWord));
  }

  input.parentElement.append(label);
}

capitalize('surname');
