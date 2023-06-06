'use strict';

function camelCaseToSeparatedWords(camelCaseString) {
  const separatedWords = camelCaseString.replace(/([A-Z])/g, ' $1');

  const capitalizedWords = separatedWords
    .replace(/^./, (match) => match.toUpperCase());

  return capitalizedWords;
}

const allInputs = document.querySelectorAll('input');

allInputs.forEach(input => {
  const inputName = camelCaseToSeparatedWords(input.name);

  input.insertAdjacentHTML('beforebegin'
    , `<label for="${input.id}" class="field-label">${inputName
      .toUpperCase()}</label>`
  );

  input.placeholder = inputName;
});
