'use strict';

function capitalizeFirstLetter(string) {
  let splitedTitle = '';

  for (const letter of string) {
    if (letter === letter.toUpperCase()) {
      splitedTitle += ' ';
    }

    splitedTitle += letter;
  }

  return splitedTitle[0].toUpperCase() + splitedTitle.slice(1);
}

const listOfInputs = Array.from(document.querySelectorAll('input'));

listOfInputs.forEach(input => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = capitalizeFirstLetter(input.name);

  input.setAttribute('placeholder', capitalizeFirstLetter(input.name));
  input.before(label);
});
