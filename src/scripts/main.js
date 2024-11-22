'use strict';

const fields = [...document.querySelectorAll('.field')];

fields.forEach((field) => {
  const input = field.querySelector('input');
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', `${input.id}`);
  label.textContent = getCorrectName(input.getAttribute('name'));

  input.setAttribute('placeholder', getCorrectName(input.name));

  field.insertBefore(label, input);
});

function getCorrectName(unCorrectName) {
  let correctName = '';

  for (const ch of unCorrectName) {
    if (ch === ch.toUpperCase()) {
      correctName += ' ';
    }

    correctName += ch;
  }

  return correctName.toLocaleLowerCase();
}
