'use strict';

const inputs = document.querySelectorAll('input');

[...inputs].forEach((input) => {
  const label = document.createElement('label');
  let splitInputName = '';

  for (const character of input.name) {
    if (character.toUpperCase() === character) {
      splitInputName += ' ';
    }
    splitInputName += character;
  }

  const capitalizedSplitInputName = splitInputName.charAt(0).toUpperCase()
+ splitInputName.slice(1);

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = capitalizedSplitInputName;
  input.setAttribute('placeholder', capitalizedSplitInputName);
  input.parentElement.append(label);
});
