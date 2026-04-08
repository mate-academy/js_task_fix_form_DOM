'use strict';

function splitInput(strInput) {
  const result = [];
  let currentWorld = '';

  for (let i = 0; i < strInput.length; i++) {
    const char = strInput[i];

    if (char === char.toUpperCase() && i !== 0) {
      // Push first word and capitalize first character.
      result.push(currentWorld[0].toUpperCase() + currentWorld.slice(1));
      currentWorld = char;
    } else {
      currentWorld += char;
    }
  }

  result.push(currentWorld[0].toUpperCase() + currentWorld.slice(1));

  return result;
}

const inputs = document.querySelectorAll('form input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = splitInput(String(input.name)).join(' ').toUpperCase();

  input.placeholder = splitInput(String(input.name)).join(' ');
  input.parentNode.insertBefore(label, input);
}
