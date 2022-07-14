'use strict';

const listInput = document.querySelectorAll('input');

[...listInput].forEach(input => {
  const labels = document.createElement('label');

  let resultString = '';

  for (const letter of input.name) {
    if (letter === letter.toUpperCase()) {
      resultString += ' ';
    };

    resultString += letter;
  }

  labels.className = 'field-label';
  labels.htmlFor = input.id;
  labels.textContent = resultString[0].toUpperCase() + resultString.slice(1);

  input.placeholder = resultString[0].toUpperCase()
  + resultString.slice(1);

  input.parentElement.prepend(labels);
});
