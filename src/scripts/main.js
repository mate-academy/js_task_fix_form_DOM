'use strict';

// write code here
const fieldElements = [...document.querySelectorAll('.field')];

function toTitle(srt) {
  return srt
    .split('')
    .map((letter, index) => {
      let currentLetter = letter;

      if (currentLetter === letter.toUpperCase() && index !== 0) {
        currentLetter = ' ' + letter;
      }

      if (index === 0) {
        currentLetter = currentLetter.toUpperCase();
      }

      return currentLetter;
    })
    .join('');
}

fieldElements.map((field) => {
  const label = document.createElement('label');
  const input = field.lastElementChild;
  const attributeName = input.getAttribute('name');
  const attributeId = input.getAttribute('id');

  input.setAttribute('placeholder', toTitle(attributeName));
  label.textContent = toTitle(attributeName);
  label.setAttribute('for', attributeId);
  label.classList.add('field-label');
  field.prepend(label);
});
