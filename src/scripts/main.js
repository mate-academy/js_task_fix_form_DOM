'use strict';

const allInputs = document.querySelectorAll('form input');

allInputs.forEach((input) => {
  const label = document.createElement('label');

  label.setAttribute('for', input.id);
  label.setAttribute('class', 'field-label');
  label.textContent = input.name;
  input.parentNode.insertBefore(label, input);

  const placeholderWord = input.name.split('');

  placeholderWord[0] = placeholderWord[0].toUpperCase();

  const upperCaseWord = placeholderWord.join('');

  input.setAttribute('placeholder', upperCaseWord);
});
