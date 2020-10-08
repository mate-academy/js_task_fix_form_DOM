'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const { name, id } = input;
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = id;
  label.textContent = getFixedName(name);

  input.placeholder = getFixedName(name);

  input.parentElement.prepend(label);
});

function getFixedName(name) {
  let fixedName = '';

  [...name].forEach(letter => {
    if (!fixedName) {
      fixedName += letter.toUpperCase();
    } else {
      letter.toUpperCase() === letter
        ? fixedName += ' ' + letter.toLowerCase()
        : fixedName += letter;
    }
  });

  return fixedName;
}
