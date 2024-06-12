'use strict';

const inputs = [...document.querySelectorAll('.field-text')];

inputs.forEach(input => {
  input.placeholder = splitWord(input.name);

  const label = document.createElement('label');

  label.for = input.id;
  label.textContent = splitWord(input.name);
  label.className = `field-label`;

  input.parentElement.prepend(label);
});

function splitWord(string) {
  const arr = string.split('');
  const index = arr.findIndex(char => char === char.toUpperCase());

  if (index !== -1) {
    arr.splice(index, 0, ' ');
  }

  arr[0] = arr[0].toUpperCase();

  return arr.join('');
}
