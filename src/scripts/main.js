'use strict';

function formatingTitle(title) {
  let splitedTitle = '';

  for (const letter of title) {
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
  label.textContent = formatingTitle(input.name);

  input.setAttribute('placeholder', formatingTitle(input.name));
  input.before(label);
});
