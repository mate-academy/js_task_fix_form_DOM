'use strict';

const inputs = Array.from(document.querySelectorAll('input'));

function getFirstLetterBig(value) {
  let word = value;
  let index = 0;
  const insert = ' ';

  for (let i = 1; i < word.length; i++) {
    if (
      word[i] === word[i].toUpperCase() &&
      word[i] !== word[i].toLowerCase()
    ) {
      index = i;
      break;
    }
  }

  if (index > 0) {
    word = word.slice(0, index) + insert + word.slice(index);
  }

  const first = word[0].toUpperCase();
  const result = word.split('');

  result[0] = first;

  return result.join('');
}

inputs.forEach((element) => {
  element.setAttribute('placeholder', getFirstLetterBig(element.name));

  const label = document.createElement('label');

  label.classList.add('field-label');
  element.parentElement.insertBefore(label, element);

  const idAttribute = element.getAttribute('id');

  label.setAttribute('for', idAttribute);

  label.style.textTransform = 'none';
  label.textContent = getFirstLetterBig(element.name);
});
