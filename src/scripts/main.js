'use strict';

const inputsList = document.querySelectorAll('input');

for (const input of [...inputsList]) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = addSpace(input.name);
  input.placeholder = addSpace(input.name);
  label.htmlFor = input.id;
  input.parentElement.append(label);
};

function addSpace(text) {
  let spaceStr;
  const spaceChar = ' ';

  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) === text.charAt(i).toUpperCase()) {
      spaceStr = text.slice(0, i) + spaceChar + text.slice(i);
      spaceStr = spaceStr.charAt(0).toUpperCase() + spaceStr.slice(1);

      return spaceStr;
    }
  }
  spaceStr = text.charAt(0).toUpperCase() + text.slice(1);

  return spaceStr;
};
